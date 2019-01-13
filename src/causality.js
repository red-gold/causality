import {Tensor} from 'causal-net.core';
import {IndexDBStorage} from 'causal-net.storage';
import {default as Function} from './function';

export default class CausalNet extends Tensor{
    /**
     * @param  {} netConfig
     * @param  {} netParams
     */
    constructor( netConfig, netParams=null, storage=null ){
        super();
        this.F = new Function();
        this.R = this.F.CoreFunction;
        this.storage = storage || IndexDBStorage;
        this.HyperParameters = this.F.getHyperParameter(netConfig);
        this.BasePipeline = this.F.getPipeline(netConfig);
        this.netParams = this.setOrInitParams(this.BasePipeline, netParams);
        this.flattenParams = this.flattenParams(this.netParams);        
    }

    flattenParams(params){
        const R = this.R, F = this.F;
        const MapValues = (objOrArray)=>Array.isArray(objOrArray)?objOrArray:Object.values(objOrArray);
        const Flatten = (pv)=>{
            if(F.isTensor(pv)){
                return pv;
            }
            else{
                let values = MapValues(pv);
                let flatten = values.reduce((flatten, v)=>{
                    let res = Flatten(v);
                    if(R.is(Array, res)){
                        flatten = [...flatten, ...res];
                    }
                    else{
                        flatten = [...flatten, res];
                    }
                    return flatten;
                }, []);
                return flatten;
            }
        };
        let values = MapValues(params);
        
        return values.reduce((flatten,v)=>[...flatten, ...Flatten(v)],[]);
    }

    layer(value, layerConfigure, layerParameters){
        const R = this.R;
        const {Name, Type, Parameters, Flow} = layerConfigure;
        console.log({Name, Type, Parameters, Flow});
        const OpsRuner = R.addIndex(R.reduce)(R.__,{result: value, trace: {}}, Flow);
        var {result, trace} = OpsRuner(({result, trace}, node, idx)=>{
            if(node.Parameter){
                result = this.T[node.Op](result, layerParameters[node.Parameter], ...node.Args);
            }
            else{
                result = this.T[node.Op](result, ...node.Args);    
            };
            trace[idx] = result.shape;
            return {result, trace};
        });
        return {[Name]: result, trace};
    }

    setOrInitParams(pipeline, netParams){
        const R = this.R, T = this.T, F = this.F;
        let pipeParams = R.fromPairs(R.filter(([k,v])=>v !== undefined,
                                R.map(R.__, pipeline)(p=>[p.Name, p.Parameters])));
        const SetOrInit = (mainValue, subVal)=>{
            let keys = R.keys(mainValue);
            let keyMainValSubVal = R.map((k)=> [k, R.prop(k, mainValue), R.propOr(null, k, subVal)], keys);
            const ValMapping = ([key, mainVal, subVal])=>{
                if(F.isParameter(mainVal)){
                    const paramShape = mainVal;
                    if(R.isNil(subVal)){
                        return [key, T.variable(T.randomNormal(paramShape))];
                    }
                    else{
                        return [key, T.variable(T.tensor(subVal).reshape(paramShape))];
                    }
                }
                else{
                    return [key, SetOrInit(mainVal, subVal)];
                }
            };
            return R.fromPairs(R.map(ValMapping, keyMainValSubVal));
        };
        return SetOrInit(pipeParams, netParams);
    }

    /**
     * @param  {} samples
     * @param  {} numSamples=1
     */
    makePredict(samples, numSamples=1){
        const T = this.T, f = this.F, l = this.L;
        this.HyperParameters.Datasize = numSamples;
        const Pipeline = f.parameterAcquisition(this.BasePipeline, this.HyperParameters);
        console.log(({Pipeline}));
        let pipeValue = {PipeInput: samples}, traces = [], netParams = this.netParams;
        return T.tidy(()=>{
            for(let layer of Pipeline){
                let layerOutput = this.layer(pipeValue[layer.Input], layer, netParams[layer.Name]);
                pipeValue[layer.Name] = layerOutput[layer.Name];
                traces.push({[layer.Name]: layerOutput.trace});
            }
            console.log({traces});
            let pipeOutput = pipeValue['PipeOutput'];
            let logProb = pipeOutput.sub(T.logSumExp(pipeOutput, 1, true));
            let predict = logProb.argMax(1);
            return {logProb, predict};
        });
    }
    /**
     * @param  {} sampleBatch
     * @param  {} labelBatch
     * @param  {} numSample
     */
    loss(batchSamples, batchLabels, numSample){
        const T = this.T;
        let labelTensor  = T.tensor(batchLabels).reshape([numSample, -1]);
        let sampleTensor = T.tensor(batchSamples).asType('float32'); 
        const {logProb} = this.makePredict(sampleTensor, numSample);
        const likelihood = logProb.neg().mul(labelTensor);
        const loss = likelihood.mean();
        return loss;
    };
    /**
     * @param  {} SampleGeneratorFn
     * @param  {} batchSize
     * @param  {} numEpochs=2
     * @param  {} lr=0.01
     */
    async train(SampleGeneratorFn, batchSize, numEpochs = 2, lr=0.001){
        const T = this.T, F = this.F, R = this.R;
        const start = new Date();
        let loss = [], averageLoss = [];
        const optimizer = T.train.adam(lr);
        for(let epochIdx of F.range(numEpochs)){
            console.log({epochIdx, averageLoss, time: new Date().toISOString(), 
                         start: start.toISOString(), elapse: (new Date() - start)/1000});
            const sampleGenerator = SampleGeneratorFn(batchSize);
            for await (let [batchSamples, batchLabels] of sampleGenerator){
                optimizer.minimize(()=>{
                    let l = this.loss(batchSamples, batchLabels, batchSize);
                    loss = [...loss, ...l.dataSync()];
                    console.log({loss});
                    return l.asType('float32');
                });
            }
            averageLoss = [...averageLoss, R.mean(loss)];
            loss = [];
        }
        return new Promise((resolve, reject)=>{
            resolve({averageLoss});
        });
    };

    async test(TestSampleGeneratorFn, testBatchSize, numClasses=10){
        const T = this.T, F = this.F, R = this.R;
        const testSampleGenerator = TestSampleGeneratorFn(testBatchSize);
        let testResult = T.zeros([1]);
        for await (let [batchSamples, batchLabels] of testSampleGenerator){
            let labelTensor  = T.tensor(batchLabels).reshape([testBatchSize, numClasses]);
            let sampleTensor = T.tensor(batchSamples).asType('float32'); 
            const {predict} = this.makePredict(sampleTensor, testBatchSize);
            let onehotPredict = T.oneHot(predict, numClasses);
            onehotPredict.print();
            labelTensor.print();
            onehotPredict.mul(labelTensor).sum().print();
            testResult = testResult.add(onehotPredict.mul(labelTensor).sum());
        }
        let result = await testResult.data();
        let pass = result[0];
        let accuracy = pass/testBatchSize;
        return {accuracy, pass};        
    }

    async getParams(){
        const F = this.F, R = this.R;
        const getParams = async (params)=>{
            if(F.isTensor(params)){
                return Array.from(await params.data());
            }
            else{
                let kVals = R.toPairs(params);
                let res = {};
                for(let [k, val] of kVals){
                    res[k] = await getParams(val); 
                }
                return res;
            }
        };
        return await getParams(this.netParams);
    }
    
    async saveParams(fileName='./save.model'){
        const params = await this.getParams();
        console.log({params});
        return await this.storage.writeFile(fileName, JSON.stringify(params));
    }
    async loadParams(fileName){
        let _params = await this.storage.readFile(fileName);
        console.log({_params});
        let params = JSON.parse(_params);
        this.setOrInitParams(this.BasePipeline, params);
        return await this.getParams();
    }
}