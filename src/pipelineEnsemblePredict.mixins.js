const PipelineEnsemblePredictMixins = (PipelineClass)=> class extends PipelineClass{ 
    async ensemblePredict(modelList, samples, batchSize){
        const T = this.T;
        let probs = [];
        for(let model of modelList){
            await this.loadParams(model);
            let {logProb} = this.predict(samples, batchSize);
            T.exp(logProb).print();
            console.log({model});
            probs.push(T.exp(logProb));
        }
        let meanProb = T.concat(probs, 0);
        if(probs.length > 1){
            meanProb = meanProb.mean(0, true);
        }
        meanProb.print();
        let predict = meanProb.argMax(1);
        let oneHotPredict = T.oneHot(predict, meanProb.shape[1]);
        oneHotPredict.print();
        return {predict, oneHotPredict};
    }
};
export default PipelineEnsemblePredictMixins;