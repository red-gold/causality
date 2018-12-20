import {Layer} from 'causal-net-core';
import {IO} from 'causal-net-utils';
import {default as Function} from './function';

export default class CausalNet{
    /**
     * @param  {} netConfig
     * @param  {} netParams
     */
    constructor( netConfig, netParams=null ){
        this.L = new Layer();
        this.F = new Function();
        this.T = this.L.CoreTs;
        this.R = this.F.CoreFn;
        this.IO = new IO();
        this.HyperParameters = this.F.getHyperParameter(netConfig);
        this.BasePipeline = this.F.getPipeline(netConfig);
        this.netParams = this.L.setOrInitParams(this.BasePipeline, netParams);
    }
    /**
     * @param  {} samples
     * @param  {} numSamples=1
     * @param  {} log=null
     */
    makePredict(samples, numSamples=1, log=null){
        const T = this.T, f = this.F, l = this.L;
        this.HyperParameters.Datasize = numSamples;
        const Pipeline = f.parameterAcquisition(this.BasePipeline, this.HyperParameters);
        console.log(JSON.stringify({Pipeline}));
        let pipeValue = {PipeInput: samples}, traces = [], netParams = this.netParams;
        return T.tidy(()=>{
            for(let layer of Pipeline){
                let layerOutput = l.layer(pipeValue[layer.Input], layer, netParams[layer.Name], ()=>{});
                pipeValue[layer.Name] = layerOutput[layer.Name];
                traces.push({[layer.Name]: layerOutput.trace});
            }
            console.log(JSON.stringify({traces}));
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
     * @param  {} log=null
     */
    loss(sampleBatch, labelBatch, numSample, log=null){
        const T = this.T;
        let label = T.tensor(labelBatch).reshape([numSample, -1]);
        const {logProb} = this.makePredict(sampleBatch, numSample, log);
        const likelihood = logProb.neg().mul(label);
        const loss = likelihood.mean();
        // if(log){ log({shape: sampleBatch.shape[0]}); };
        return loss;
    };
    /**
     * @param  {} doSampleGenerator
     * @param  {} batchSize
     * @param  {} numEpochs=2
     * @param  {} lr=0.01
     */
    train(doSampleGenerator, batchSize, numEpochs = 2, lr=0.01){
        const T = this.T, F = this.F, R = this.R;
        const start = new Date();
        let loss = [], averageLoss = [];
        const optimizer = T.train.adam(lr);
        for(let epochIdx of F.range(numEpochs)){
            console.log({epochIdx, averageLoss, time: new Date().toISOString(), start: start.toISOString(),
                         elapse: (new Date() - start)/1000});
            const sampleGenerator = doSampleGenerator(batchSize);
            for(let [batchData, batchLabels] of sampleGenerator){
                // console.log({dlen: batchData.length, llen: batchLabels.length});
                optimizer.minimize(()=>{
                    let l = this.loss(batchData, batchLabels, batchSize, (msg)=>{console.log(msg);});
                    loss = [...loss, ...l.dataSync()];
                    console.log({loss});
                    return l;
                });
            }
            averageLoss = [...averageLoss, R.mean(loss)];
            loss = [];
        }
    };

    test(testData, testLabels){
        let {predict} = this.makePredict(testData);
        predict = predict.dataSync();
        let corrects = testLabels.map((testLabel,idx)=>{
            return testLabel === predict[idx];
        });
        return {corect: R.sum(corrects), total: testLabels.length};
    }

    getParamsSync(){
        const F = this.F, R = this.R;
        const getParams = (params)=>{
            if(F.isTensor(params)){
                return Array.from(params.dataSync());
            }
            else{
                return R.map(getParams, params);
            }
        };
        return getParams(this.netParams);
    }
    
    saveParamsSync(fileName='./save.model'){
        const params = this.getParamsSync();
        return this.IO.writeSync(fileName, JSON.stringify(params));
    }
    readParamsSync(fileName){
        const params = JSON.parse(this.IO.readSync(fileName));
        this.netParams = this.L.setOrInitParams(this.BasePipeline, params);
    }
}