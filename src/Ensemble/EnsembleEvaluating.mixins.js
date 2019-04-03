const EnsembleEvaluatingMixins = (BasePipelineClass)=> class extends BasePipelineClass{ 
    async ensembleAccuracyTest(TestSampleGeneratorFn, modelList){
        const T = this.T;
        const testSampleGenerator = TestSampleGeneratorFn();
        let testSize = 0, pass = 0;
        for await (let {idx, batchSize, data} of testSampleGenerator){
            this.SampleSize = batchSize;
            let [batchSamples, batchLabels] = data;
            let sampleTensor = T.tensor(batchSamples).reshape([batchSize, -1]).asType('float32');
            let labelTensor  = T.tensor(batchLabels).reshape([batchSize, -1]);
            let oneHotPredict = await this.ensembleOneHotPredict(modelList, sampleTensor, batchSize);
            let correctPredicts = oneHotPredict.mul(labelTensor);
            pass += correctPredicts.sum().dataSync()[0];
            testSize += batchSize;
        }
        let accuracy = pass / testSize;
        return {accuracy, pass};             
    }
};
export default EnsembleEvaluatingMixins;