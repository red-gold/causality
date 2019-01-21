const EnsembleMixins = (PipelineClass)=> class extends PipelineClass{ 
    async ensembleTest(TestSampleGeneratorFn, modelList, testBatchSize, numClasses=10){
        const T = this.T, F = this.F, R = this.R;
        const testSampleGenerator = TestSampleGeneratorFn(testBatchSize);
        let testResult = T.zeros([1]);
        for await (let [batchSamples, batchLabels] of testSampleGenerator){
            let labelTensor  = T.tensor(batchLabels).reshape([testBatchSize, numClasses]);
            let sampleTensor = T.tensor(batchSamples).asType('float32'); 
            const {predict} = await this.makeEnsemblePredict(modelList, sampleTensor, testBatchSize);
            let onehotPredict = T.oneHot(predict, numClasses);
            onehotPredict.print();
            labelTensor.print();
            onehotPredict.mul(labelTensor).sum().print();
            testResult = testResult.add(onehotPredict.mul(labelTensor).sum());
        }
        let result = await testResult.data();
        let pass = result[0];
        let accuracy = pass/testBatchSize;
        return {accuracy, pass};        
    }
    async makeEnsemblePredict(modelList, samples, numSamples=1){
        const T = this.T, f = this.F;
        this.HyperParameters.Datasize = numSamples;
        const Pipeline = f.parameterAcquisition(this.BasePipeline, this.HyperParameters);
        let pipeValue = {PipeInput: samples}, traces = [], netParams = this.netParams;
        let probs = [];
        for(let model of modelList){
            await this.loadParams(model);
            let {logProb} = T.tidy(()=>{
                for(let layer of Pipeline){
                    let layerOutput = this.layer(pipeValue[layer.Input], layer, netParams[layer.Name]);
                    pipeValue[layer.Name] = layerOutput[layer.Name];
                    traces.push({[layer.Name]: layerOutput.trace});
                }
                console.log({traces});
                let pipeOutput = pipeValue['PipeOutput'];
                let logProb = pipeOutput.sub(T.logSumExp(pipeOutput, 1, true));
                let predict = logProb.argMax(1);
                return {logProb, predict};
            });
            logProb.print();
            probs.push(T.exp(logProb));
        }
        let meanProb = T.concat(probs).mean(0, true);
        meanProb.print();
        let ensemblePredict = meanProb.argMax(1);
        return {predict:ensemblePredict};
    }
};
export default EnsembleMixins;