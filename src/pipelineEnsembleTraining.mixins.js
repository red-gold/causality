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
            let {oneHotPredict} = await this.ensemblePredict(modelList, sampleTensor, batchSize);
            oneHotPredict.print();
            labelTensor.print();
            testResult = testResult.add(oneHotPredict.mul(labelTensor).sum());
            testResult.print();
        }
        let result = await testResult.data();
        let pass = result[0];
        let accuracy = pass / testSize;
        return {accuracy, pass};             
    }
};
export default PipelineEnsembleTrainingMixins;