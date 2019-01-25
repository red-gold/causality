const PipelinePredictMixins = (PipelineClass)=> class extends PipelineClass{
    /**
     * @param  {} samples
     */
    predict(samples, numSamples=1){
        const T = this.T;
        return T.tidy(()=>{
            let sampleTensor = T.tensor(samples).reshape([numSamples, -1]).asType('float32'); 
            sampleTensor.print();
            let pipeOutput = this.runPipeline(sampleTensor);
            let logProb = pipeOutput.sub(T.logSumExp(pipeOutput, 1, true));
            let numClasses = logProb.shape[1];
            let predict = logProb.argMax(1);
            let onehotPredict = T.oneHot(predict, numClasses);
            return {predict, onehotPredict};
        });
    }
};
export default PipelinePredictMixins;