const PipelinePredictMixins = (PipelineClass)=> class extends PipelineClass{
    /**
     * @param  {} samples
     * @param  {} numSamples=1
     */
    predict(samples){
        if(!this.runPipeline){
            throw Error('PipelineLayersMixins must be included');
        }
        const T = this.T;
        return T.tidy(()=>{
            let pipeOutput = this.runPipeline(samples);
            let logProb = pipeOutput.sub(T.logSumExp(pipeOutput, 1, true));
            let predict = logProb.argMax(1);
            let numClasses = logProb.shape[1];
            let onehotPredict = T.oneHot(predict, numClasses);
            return {logProb, predict, onehotPredict};
        });
    }
};
export default PipelinePredictMixins;