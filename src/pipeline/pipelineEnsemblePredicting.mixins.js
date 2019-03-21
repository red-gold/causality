const PipelineEnsemblePredictMixins = (PipelineClass)=> class extends PipelineClass{ 
    async ensembleProbFit(modelList, sampleTensor){
        const T = this.T;
        let probs = [];
        for(let model of modelList){
            await this.loadParams(model);
            let pipeOutput = this.runPipeline(sampleTensor);
            let logProb = this.Fit(pipeOutput);
            probs.push(T.exp(logProb));
        }
        let meanProb = T.concat(probs, 0);
        if(probs.length > 1){
            meanProb = meanProb.mean(0, true);
        }
        return meanProb;
    }
    async ensemblePredict(modelList, samples, numSamples=1){
        const T = this.T;
        console.log({samples});
        let sampleTensor = T.tensor(samples).reshape([numSamples, -1]).asType('float32'); 
        let meanProb = this.ensembleProbFit(modelList, sampleTensor);
        let predict = meanProb.argMax(1);
        return predict;
    }

    async ensembleOneHotPredict(modelList, sampleTensor){
        let meanProb = await this.ensembleProbFit(modelList, sampleTensor);
        let predict = meanProb.argMax(1);
        let oneHotPredict = this.T.oneHot(predict, this.NumClasses);
        return oneHotPredict;
    }
};
export default PipelineEnsemblePredictMixins;