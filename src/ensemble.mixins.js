const EnsembleMixins = (PipelineClass)=> class extends PipelineClass{ 
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
    async makeEnsemblePredict(modelList, samples, numSamples=1){
        const T = this.T, f = this.F;
        this.HyperParameters.Datasize = numSamples;
        const Pipeline = f.parameterAcquisition(this.BasePipeline, this.HyperParameters);
        let probs = [], pipeValue = {PipeInput: samples};
        for(let model of modelList){
            // console.log(this.netParams);
            await this.loadParams(model);
            // console.log(this.netParams);
            let netParams = this.netParams, lastLayer = 'PipeInput', traces=[];
            let {logProb} = T.tidy(()=>{
                for(let layer of Pipeline){
                    let layerOutput = this.layer(pipeValue[lastLayer], layer, netParams[layer.Name]);
                    lastLayer = layer.Name;
                    pipeValue[layer.Name] = layerOutput[layer.Name];
                    traces.push({[layer.Name]: layerOutput.trace});
                    if(this.logger.debug){
                        this.logger.debug({traces});
                    }
                }
                
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