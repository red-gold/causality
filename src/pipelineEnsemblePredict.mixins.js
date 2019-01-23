const PipelineEnsemblePredictMixins = (PipelineClass)=> class extends PipelineClass{ 
    async ensemblePredict(modelList, samples, batchSize){
        const T = this.T;
        let probs = []
        for(let model of modelList){
            await this.loadParams(model);
            let {logProb} = this.predict(samples, batchSize);
            logProb.print();
            probs.push(T.exp(logProb));
        }
        let meanProb = T.concat(probs).mean(0, true);
        meanProb.print();
        let ensemblePredict = meanProb.argMax(1);
        return {predict:ensemblePredict};
    }
};
export default PipelineEnsemblePredictMixins;