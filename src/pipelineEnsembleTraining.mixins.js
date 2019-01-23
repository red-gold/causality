const PipelineEnsembleTrainingMixins = (PipelineClass)=> class extends PipelineClass{ 
    async ensembleTest(TestSampleGeneratorFn, modelList){
        const T = this.T;
        const testSampleGenerator = TestSampleGeneratorFn();
        let testResult = T.zeros([1]);
        let testSize = 0;
        for await (let {idx, batchSize, data} of testSampleGenerator){
            this.SampleSize = batchSize;
            let [batchSamples, batchLabels] = data;
            let sampleTensor = T.tensor(batchSamples).reshape([batchSize, -1]).asType('float32');
            let labelTensor  = T.tensor(batchLabels).reshape([batchSize, -1]);
            testSize += batchSize;
            let {predict} = await this.ensemblePredict(modelList, sampleTensor, batchSize);
            predict.print();
            labelTensor.print();
            predict.mul(labelTensor).sum().print();
            testResult = testResult.add(predict.mul(labelTensor).sum());
        }
        let result = await testResult.data();
        let pass = result[0];
        let accuracy = pass / testSize;
        return {accuracy, pass};             
    }
};
export default PipelineEnsembleTrainingMixins;