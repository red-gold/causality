const PipelineEnsemblePredictMixins = (PipelineClass)=> class extends PipelineClass{ 
    async ensemblePredict(modelList, samples, batchSize){
        const T = this.T;
        let probs = [];
        for(let model of modelList){
            await this.loadParams(model);
            let {logProb} = this.predict(samples, batchSize);
            probs.push(T.exp(logProb));
        }
        let meanProb = T.concat(probs).mean(0, true);
        let predict = meanProb.argMax(1);
        let oneHotPredict = T.oneHot(predict, meanProb.shape[1]);
        return {predict, oneHotPredict};
    }
};
export default PipelineEnsemblePredictMixins;