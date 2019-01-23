const PipelineHyperParametersMixins = (PipelineClass)=> class extends PipelineClass{
    setHyperParametersByConfig(netConfig){
        this.hyperParameters = this.F.getHyperParameter(netConfig);
    }
    hyperParameterAcquisition(hyperParams=null){
        if(hyperParams){
            this.hyperParameters = hyperParams;
        }
        this.pipeline = this.F.parameterAcquisition(this.basePipeline, this.hyperParameters);
    }

    set HyperParameters(hyperParameters){
        this.hyperParameters = hyperParameters;
    }

    get HyperParameters(){
        return this.hyperParameters;
    }

    set SampleSize(numSamples){
        this.HyperParameters.SampleSize = numSamples;
        this.hyperParameterAcquisition();
    }

    get SampleSize(){
        return this.HyperParameters.SampleSize;
    }
};
export default PipelineHyperParametersMixins;