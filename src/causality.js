import {default as function} from 
class Causality{
    constructor( NetConfig, NetParams ){
        this.NetConfig = NetConfig;
        this.HyperParameter = this.NetConfig.HyperParameter;
        this.NetParams = NetParams;
    }

    make_predict(data= ){
        let pipeValue = {PipeInput: data};
        let traces = [];
        
        return T.tidy(()=>{
            for(let layer of NetConfig.Pipeline){
                let layerOutput = PipelineLayer(val[layer.Input], layer, pars[layer.Name], ()=>{});
                pipeValue[layer.Name] = layerOutput[layer.Name];
                traces.push({[layer.Name]: layerOutput.trace});
                console.log({traces});
            }
            let {pipeOutput} = pipeValue;
            let logProb = pipeOutput.sub(tf.logSumExp(layerOuput, 1, true));
            let predict = logProb.argMax(1);
            return {logProb, predict};
        });
    }

    loss(data, encodeLabels, log=null){
        const {logProb} = this.make_predict(data, log);
        const likelihood = logProb.neg().mul(encodeLabels);
        const loss = likelihood.mean();
        if(log){ log({shape: data.shape[0]}); };
        return loss;
    };

    train(data, labels, numEpoch=30, lr=0.01, batch=10000){
        const [S, W, H, D] = data.shape;
        const numBatch = S/batch;//mod
        const start = new Date();
        let loss = [], averageLoss = [];
        const numIters = numEpoch*numBatch;
        const optimizer = tf.train.adam(lr);
        for(let iter of R.range(0, numIters)){
            const batchIdx = iter%numBatch;
            const epochIdx = (iter/numBatch)>>1<<1;
            const batchData = data.slice([batchIdx*batch], [batch]);
            const batchLabels = labels.slice([batchIdx*batch], [batch]);
            batchLabels.argMax(1).print();
            optimizer.minimize(()=>{
                let l = this.loss(batchData, batchLabels, (msg)=>{console.log(msg)});
                [loss, averageLoss] = (batchIdx===0)?[[], [...averageLoss, R.mean(loss)]]:[[...loss, ...l.dataSync()], averageLoss];
                console.log({[epochIdx+'/'+batchIdx]: loss, averageLoss, 
                             time: new Date().toISOString(), start: start.toISOString(),
                             numBatch, numEpoch, elapse: (new Date() - start)/1000});
                return l;
            });
        }
    };
    test(testData, testLabels){
        let {predict} = this.make_predict(testData);
        predict = predict.dataSync();
        let corrects = testLabels.map((testLabel,idx)=>{
            return testLabel === predict[idx];
        });
        return {corect: R.sum(corrects), total: testLabels.length};
    }
    async get_params(){
        
    }
    async save_params(fileName){
        const w = await this.get_params();
        console.log(w);
        return fs.writeJSON(fileName, w);
    }
}