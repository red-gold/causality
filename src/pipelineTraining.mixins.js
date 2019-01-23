const PipelineTrainingMixins = (PipelineClass)=> class extends PipelineClass{
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
            let sampleTensor = T.tensor(batchSamples).reshape([batchSize, -1]).asType('float32');
            let labelTensor  = T.tensor(batchLabels).reshape([batchSize, -1]);
            let numClasses = labelTensor.shape[1];
            testSize += batchSize;
            let {predict} = this.makePredict(sampleTensor, batchSize);
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
}
export default PipelineTrainingMixins;