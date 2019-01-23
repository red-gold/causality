const PipelinePredictMixins = (PipelineClass)=> class extends PipelineClass{
    /**
     * @param  {} samples
     * @param  {} numSamples=1
     */
    makePredict(samples, numSamples=1){
        const T = this.T, f = this.F;
        this.HyperParameters.Datasize = numSamples;
        const Pipeline = f.parameterAcquisition(this.BasePipeline, this.HyperParameters);
        let pipeValue = {PipeInput: samples}, traces = [], 
            netParams = this.netParams, lastLayer = 'PipeInput';
        return T.tidy(()=>{
            for(let layer of Pipeline){
                let layerOutput = this.layer(pipeValue[lastLayer], layer, netParams[layer.Name]);
                lastLayer = layer.Name;
                pipeValue[layer.Name] = layerOutput[layer.Name];
                traces.push({[layer.Name]: layerOutput.trace});
            }
            this.logger.debug({traces});
            let pipeOutput = pipeValue[lastLayer];
            let logProb = pipeOutput.sub(T.logSumExp(pipeOutput, 1, true));
            let predict = logProb.argMax(1);
            return {logProb, predict};
        });
    }
};
export default PipelinePredictMixins;