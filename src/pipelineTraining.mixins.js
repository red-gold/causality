const PipelineTrainingMixins = (PipelineClass)=> class extends PipelineClass{
    trainProgress(epochIdx, losses, start){
        if(this.logger.progress){
            this.logger.progress({epochIdx, losses,  
                         'start at': start.toISOString(), 
                         'elapse in second': (new Date() - start)/1000});
        }
    }
    /**
     * @param  {} sampleBatch
     * @param  {} labelBatch
     * @param  {} numSample
     */
    loss(batchSamples, batchLabels, numSample){
        if(!this.predict){
            throw Error('PipelinePredict.mixins must be included');
        }
        this.SampleSize = numSample;
        const T = this.T;
        let sampleTensor = T.tensor(batchSamples).reshape([numSample, -1]).asType('float32'); 
        let labelTensor  = T.tensor(batchLabels).reshape([numSample, -1]);
        const {logProb} = this.predict(sampleTensor, numSample);
        const likelihood = logProb.neg().mul(labelTensor);
        const loss = likelihood.mean();
        return loss;
    };
    async train(SampleGeneratorFn, numEpochs = 2){
        if(!this.optimizer){
            throw Error('optimizer must be set');
        }
        const T = this.T, F = this.F, R = this.R;
        let optimizer = this.optimizer;
        const startTimeStamp = new Date();
        let losses = [];
        
        for(let epochIdx of F.range(numEpochs)){
            const sampleGenerator = SampleGeneratorFn();
            let iterLosses = [];
            for await (let {idx, batchSize, data} of sampleGenerator){
                let [batchSamples, batchLabels] = data;
                optimizer.minimize(()=>{
                    let l = this.loss(batchSamples, batchLabels, batchSize);
                    iterLosses.push(l.dataSync());
                    return l;
                });
            }
            losses.push(R.mean(iterLosses));
            iterLosses = [];
            this.trainProgress(epochIdx, losses, startTimeStamp);
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
        for await (let {idx, batchSize, data} of testSampleGenerator){
            this.SampleSize = batchSize;
            let [batchSamples, batchLabels] = data;
            let sampleTensor = T.tensor(batchSamples).reshape([batchSize, -1]).asType('float32');
            let labelTensor  = T.tensor(batchLabels).reshape([batchSize, -1]);
            testSize += batchSize;
            let {onehotPredict} = this.predict(sampleTensor, batchSize);
            onehotPredict.print();
            labelTensor.print();
            onehotPredict.mul(labelTensor).sum().print();
            testResult = testResult.add(onehotPredict.mul(labelTensor).sum());
        }
        let result = await testResult.data();
        let pass = result[0];
        let accuracy = pass / testSize;
        return {accuracy, pass};        
    }
};
export default PipelineTrainingMixins;