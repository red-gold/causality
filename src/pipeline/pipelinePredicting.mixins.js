const PipelinePredictMixins = (PipelineClass)=> class extends PipelineClass{

    predict(samples, numSamples=1){
        const Predict = this.Predict;
        const T = this.T;
        return T.tidy(()=>{
            let sampleTensor = T.tensor(samples).reshape([numSamples, -1]).asType('float32'); 
            let pipeOutput = this.runPipeline(sampleTensor);
            return Predict(pipeOutput);
        });
    }

    onehotPredict(samples, numSamples=1){
        const OneHotPredict = this.OnehotPredict;
        const T = this.T;
        return T.tidy(()=>{
            let sampleTensor = T.tensor(samples).reshape([numSamples, -1]).asType('float32'); 
            let pipeOutput = this.runPipeline(sampleTensor);
            return OneHotPredict(pipeOutput);
        });
    }
};
export default PipelinePredictMixins;