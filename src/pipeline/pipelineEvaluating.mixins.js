const PipelineEvaluatingMixins= (BasePipeline)=> class extends BasePipeline{
    async accuracyTest(TestSampleGeneratorFn){
        const T = this.T, F = this.F, R = this.R;
        const testSampleGenerator = TestSampleGeneratorFn();
        let testSize = 0, pass = 0;
        for await (let {idx, batchSize, data} of testSampleGenerator){
            let [batchSamples, batchLabels] = data;
            let sampleTensor = T.tensor(batchSamples).reshape([batchSize, -1]).asType('float32'); 
            let labelTensor = T.tensor(batchLabels).reshape([batchSize, -1]);
            let pipelineOutTensor = this.runPipeline(sampleTensor);
            let onehotPredict = this.OneHotPredict(pipelineOutTensor);   
            let correctPredicts = onehotPredict.mul(labelTensor);
            pass += correctPredicts.sum().dataSync()[0];
            testSize += batchSize;
        }
        let accuracy = pass / testSize;
        return {accuracy, pass};        
    }
}

export default PipelineEvaluatingMixins;