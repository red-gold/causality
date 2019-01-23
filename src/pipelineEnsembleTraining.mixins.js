const PipelineEnsembleTrainingMixins = (PipelineClass)=> class extends PipelineClass{ 
    async ensembleTest(TestSampleGeneratorFn, modelList){
        const T = this.T, F = this.F, R = this.R;
        const testSampleGenerator = TestSampleGeneratorFn();
        let testResult = T.zeros([1]);
        let testSize = 0;
        for await (let {idx, batchSize, data} of testSampleGenerator){
            let [batchSamples, batchLabels] = data;
            let sampleTensor = T.tensor(batchSamples).reshape([batchSize, -1]).asType('float32');
            let labelTensor = T.tensor(batchLabels).reshape([batchSize, -1]);
            let numClasses = labelTensor.shape[1];
            testSize += batchSize;
            const {predict} = await this.makeEnsemblePredict(modelList, sampleTensor, batchSize);
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
};
export default PipelineEnsembleTrainingMixins;