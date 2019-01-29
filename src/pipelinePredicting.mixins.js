const PipelinePredictMixins = (PipelineClass)=> class extends PipelineClass{

    /**
     * @param  {} samples
     */
    predict(samples, numSamples=1){
        if( !this.Predict ){
            throw Error('models.mixins must be included');
        }
        const T = this.T;
        return T.tidy(()=>{
            let sampleTensor = T.tensor(samples).reshape([numSamples, -1]).asType('float32'); 
            let pipeOutput = this.runPipeline(sampleTensor);
            return this.Predict(pipeOutput);
        });
    }

    onehotPredict(samples, numSamples=1){
        if( !this.Predict ){
            throw Error('models.mixins must be included');
        }
        const T = this.T;
        return T.tidy(()=>{
            let sampleTensor = T.tensor(samples).reshape([numSamples, -1]).asType('float32'); 
            let pipeOutput = this.runPipeline(sampleTensor);
            return this.OnehotPredict(pipeOutput);
        });
    }
};
export default PipelinePredictMixins;