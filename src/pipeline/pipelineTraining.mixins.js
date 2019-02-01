const PipelineTrainingMixins = (PipelineClass)=> class extends PipelineClass{
    trainProgress(epochIdx, losses, numEpochs){
        if(!this.startTimeStamp){
            this.startTimeStamp = new Date();
        }
        if(this.logger.progress){
            this.logger.progress({epochIdx, losses,  
                         'start at': this.startTimeStamp.toISOString(), 
                         'elapse in second': (new Date() - this.startTimeStamp)/1000});
        }
        if(epochIdx === numEpochs - 1){//done
            this.startTimeStamp = null;
        }
    }
    /**
     * @param  {} sampleBatch
     * @param  {} labelBatch
     * @param  {} numSample
     */
    loss(data, numSamples){
        const Loss = this.Loss;
        this.SampleSize = numSamples;
        const T = this.T;
        let [batchSamples, batchLabels] = data;
        return T.tidy(()=>{
            let sampleTensor = T.tensor(batchSamples).reshape([numSamples, -1]).asType('float32'); 
            let labelTensor = T.tensor(batchLabels).reshape([numSamples, -1]);
            let pipelineOutTensor = this.runPipeline(sampleTensor);
            let loss = Loss(pipelineOutTensor, labelTensor);
            return loss;
        });
    };
    
    async train(SampleGeneratorFn, numEpochs = 2){
        const F = this.F, R = this.R;
        let optimizer = this.optimizer;
        let losses = [];
        for(let epochIdx of F.range(numEpochs)){
            const sampleGenerator = SampleGeneratorFn(epochIdx);
            let iterLosses = [];
            for await (let {idx, batchSize, data} of sampleGenerator){
                optimizer.minimize(()=>{
                    let loss = this.loss(data, batchSize);
                    iterLosses.push(loss.dataSync());
                    return loss;
                });
            }
            losses.push(R.mean(iterLosses));
            iterLosses = [];
            this.trainProgress(epochIdx, losses, numEpochs);
        }
        return new Promise((resolve, reject)=>{
            resolve({losses});
        });
    };
};
export default PipelineTrainingMixins;