import {BaseTensor, Layer} from 'causal-net-core';
import {default as Function} from './function';

export default class CausalNet{
    /**
     * @param  {} netConfig
     * @param  {} netParams
     */
    constructor( netConfig, netParams ){
        this.l = new Layer();
        this.f = new Function();
        this.HyperParameters = this.f.getHyperParameter(netConfig);
        this.BasePipeline = this.f.getPipeline(netConfig);
        this.netParams = netParams;
        this.netParams = this.l.setOrInitParams(this.BasePipeline, netParams);
        const baseTensor = new BaseTensor();
        this.T = baseTensor.Tensor;
    }
    /**
     * @param  {} samples
     * @param  {} numSamples=1
     * @param  {} log=null
     */
    makePredict(samples, numSamples=1, log=null){
        const T = this.T, f = this.f, l = this.l;
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

    loss(sampleBatch, labelBatch, numSample, log=null){
        const T = this.T;
        let label = T.tensor(labelBatch).reshape([numSample, -1]);
        const {logProb} = this.makePredict(sampleBatch, numSample, log);
        const likelihood = logProb.neg().mul(label);
        const loss = likelihood.mean();
        // if(log){ log({shape: sampleBatch.shape[0]}); };
        return loss;
    };

    train(doSampleGenerator, batchSize, numEpochs = 2, lr=0.01){
        const T = this.T, f = this.f, R = this.f.Function;
        const start = new Date();
        let loss = [], averageLoss = [];
        const optimizer = T.train.adam(lr);
        for(let epochIdx of f.range(numEpochs)){
            console.log({epochIdx, averageLoss, time: new Date().toISOString(), start: start.toISOString(),
                         elapse: (new Date() - start)/1000});
            const sampleGenerator = doSampleGenerator(batchSize);
            for(let [batchData, batchLabels] of sampleGenerator){
                console.log({dlen: batchData.length, llen: batchLabels.length});
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
}