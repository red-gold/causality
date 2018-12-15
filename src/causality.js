import {BaseTensor, Layer} from 'causal-net-core';
import {default as Function} from './function';
export default class CausalNet{
    constructor( NetConfig, netParams ){
        
        this.HyperParameters = NetConfig.HyperParameters;
        this.BasePipeline = NetConfig.Pipeline;
        this.netParams = netParams;
        const baseTensor = new BaseTensor();
        this.T = baseTensor.Tensor;
        this.l = new Layer();
        this.f = new Function();
    }

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
                console.log(JSON.stringify({traces}));
            }
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
        const T = this.T, f = this.f;
        const start = new Date();
        let loss = [], averageLoss = [];
        const optimizer = T.train.adam(lr);
        for(let epochIdx of f.range(numEpochs)){
            console.log({epochIdx});
            const sampleGenerator = doSampleGenerator(batchSize);
            for(let [batchData, batchLabels] of sampleGenerator){
                console.log({dlen: batchData.length, llen: batchLabels.length});
                optimizer.minimize(()=>{
                    let l = this.loss(batchData, batchLabels, batchSize, (msg)=>{console.log(msg);});
                    // [loss, averageLoss] = (batchIdx===0)?[[], [...averageLoss, R.mean(loss)]]:[[...loss, ...l.dataSync()], averageLoss];
                    // console.log({[epochIdx+'/'+batchIdx]: loss, averageLoss, 
                    //              time: new Date().toISOString(), start: start.toISOString(),
                    //              numBatch, numEpoch, elapse: (new Date() - start)/1000});
                    return l;
                });
            }
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