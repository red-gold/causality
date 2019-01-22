import {Tensor} from 'causal-net.core';
import {indexDBStorage} from 'causal-net.storage';
import {Platform} from 'causal-net.utils';
import {default as EnsembleMixins} from './ensemble.mixins';
import {default as Function} from './function';

export default class CausalNet extends Platform.mixWith(Tensor,[EnsembleMixins]){
    /**
     * @param  {} netConfig
     * @param  {} netParams
     */
    constructor( netConfig, netParams=null, storage=null ){
        super();
        this.F = new Function();
        this.R = this.F.CoreFunction;
        this.logger = console;
        this.storage = storage || indexDBStorage;
        this.saveModelDir = '/saveModel/';
        this.HyperParameters = this.F.getHyperParameter(netConfig);
        this.BasePipeline = this.F.getPipeline(netConfig);
        this.netParams = this.setOrInitParams(this.BasePipeline, netParams);
        this.flattenParams = this.flattenParams(this.netParams);        
    }

    set Logger(logger){
        this.logger = logger;
    }

    get Logger(){
        return this.logger;
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
        this.logger.debug({Name, Type, Parameters, Flow});
        const OpsRunner = R.addIndex(R.reduce)(R.__,{result: value, trace: {}}, Flow);
        var {result, trace} = OpsRunner(({result, trace}, node, idx)=>{
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
        // console.log(({Pipeline}));
        let pipeValue = {PipeInput: samples}, traces = [], netParams = this.netParams;
        return T.tidy(()=>{
            for(let layer of Pipeline){
                let layerOutput = this.layer(pipeValue[layer.Input], layer, netParams[layer.Name]);
                pipeValue[layer.Name] = layerOutput[layer.Name];
                traces.push({[layer.Name]: layerOutput.trace});
            }
            // console.log({traces});
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
        let sampleTensor = T.tensor(batchSamples).reshape([numSample, -1]).asType('float32'); 
        let labelTensor  = T.tensor(batchLabels).reshape([numSample, -1]);
        const {logProb} = this.makePredict(sampleTensor, numSample);
        const likelihood = logProb.neg().mul(labelTensor);
        const loss = likelihood.mean();
        return loss;
    };
    makeOptimizer(method='adam', args=[0.02]){        
        this.optimizer = this.T.train[method](...args);
        return this.optimizer;
    }
    /**
     * @param  {} SampleGeneratorFn
     * @param  {} batchSize
     * @param  {} numEpochs=2
     * @param  {} lr=0.01
     */
    async train(SampleGeneratorFn, numEpochs = 2, lr=0.001){
        const T = this.T, F = this.F, R = this.R;
        const start = new Date();
        let loss = [], averageLoss = [];
        if(!this.optimizer){
            this.makeOptimizer();
        }
        let optimizer = this.optimizer;
        for(let epochIdx of F.range(numEpochs)){
            if(this.logger.progress){
                this.logger.progress({epochIdx, averageLoss, time: new Date().toISOString(), 
                             start: start.toISOString(), elapse: (new Date() - start)/1000});
            }
            const sampleGenerator = SampleGeneratorFn();
            for await (let {idx, batchSize, data} of sampleGenerator){
                let [batchSamples, batchLabels] = data;
                optimizer.minimize(()=>{
                    let l = this.loss(batchSamples, batchLabels, batchSize);
                    loss = [...loss, ...l.dataSync()];
                    return l;
                });
            }
            averageLoss = [...averageLoss, R.mean(loss)];
            loss = [];
        }
        return new Promise((resolve, reject)=>{
            resolve({averageLoss});
        });
    };

    async test(TestSampleGeneratorFn){
        const T = this.T, F = this.F, R = this.R;
        const testSampleGenerator = TestSampleGeneratorFn();
        let testResult = T.zeros([1]);
        let testSize = 0;
        for await (let {idx, batchSize, data} of testSampleGenerator){
            let [batchSamples, batchLabels] = data;
            let labelTensor  = T.tensor(batchLabels).reshape([batchSize, -1]);
            let sampleTensor = T.tensor(batchSamples);
            let numClasses = labelTensor.shape[1];
            testSize += batchSize;
            const {predict} = this.makePredict(sampleTensor, batchSize);
            
            
            let onehotPredict = T.oneHot(predict, numClasses);
            onehotPredict.print();
            labelTensor.print();
            onehotPredict.mul(labelTensor).sum().print();
            testResult = testResult.add(onehotPredict.mul(labelTensor).sum());
        }
        let result = await testResult.data();
        let pass = result[0];
        let accuracy = pass/testSize;
        return {accuracy, pass};        
    }

    async getParams(asObject=true){
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
        let params = await getParams(this.netParams);
        if(asObject){
            return params;
        }
        else{
            return JSON.stringify(params);
        }
    }
    async getSavedParams(){
        let fileList = await this.storage.getFileList(this.saveModelDir);
        return fileList.map(fileName=>fileName.replace(this.saveModelDir,''));
    }
    async saveParams(fileName='save.model'){
        const params = await this.getParams();
        await this.storage.writeFile(this.saveModelDir + fileName, JSON.stringify(params));
        return params;
    }
    async loadParams(fileName, params=null){
        if(!params){
            let _params = await this.storage.readFile(this.saveModelDir+fileName);
            params = JSON.parse(_params);
        }
        this.netParams = this.setOrInitParams(this.BasePipeline, params);
        return await this.getParams(false);
    }
}