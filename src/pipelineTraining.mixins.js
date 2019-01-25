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
    loss(data, numSamples, getcorrectPredicts=false){
        this.SampleSize = numSamples;
        const T = this.T;
        let [batchSamples, batchLabels] = data;
        return T.tidy(()=>{
            let sampleTensor = T.tensor(batchSamples).reshape([numSamples, -1]).asType('float32'); 
            let labelTensor = T.tensor(batchLabels).reshape([numSamples, -1]);
            let numClasses = labelTensor.shape[1];
            let pipeOutput = this.runPipeline(sampleTensor);
            let logProb = pipeOutput.sub(T.logSumExp(pipeOutput, 1, true));
            let likelihood = logProb.neg().mul(labelTensor);
            let loss = likelihood.mean();
            if(getcorrectPredicts){
                let predict = logProb.argMax(1);
                let onehotPredict = T.oneHot(predict, numClasses);
                let correctPredicts = onehotPredict.mul(labelTensor)
                return {loss, correctPredicts};
            }
            else{
                return {loss};
            }
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
                    let {loss} = this.loss(data, batchSize);
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

    async test(TestSampleGeneratorFn){
        const T = this.T, F = this.F, R = this.R;
        const testSampleGenerator = TestSampleGeneratorFn();
        let testResult = T.zeros([1]);
        let testSize = 0;
        let getpredictedLabels = true;
        for await (let {idx, batchSize, data} of testSampleGenerator){
            let {correctPredicts} = this.loss(data, batchSize, getpredictedLabels);   
            testSize += batchSize;
            testResult = correctPredicts.sum();
        }
        let result = await testResult.data();
        let pass = result[0];
        let accuracy = pass / testSize;
        return {accuracy, pass};        
    }
};
export default PipelineTrainingMixins;