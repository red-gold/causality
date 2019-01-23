const PipelineEnsemblePredictMixins = (PipelineClass)=> class extends PipelineClass{ 
    async makeEnsemblePredict(modelList, samples, numSamples=1){
        const T = this.T, f = this.F;
        this.HyperParameters.Datasize = numSamples;
        const Pipeline = f.parameterAcquisition(this.BasePipeline, this.HyperParameters);
        let probs = [], pipeValue = {PipeInput: samples};
        for(let model of modelList){
            // console.log(this.netParams);
            await this.loadParams(model);
            // console.log(this.netParams);
            let netParams = this.netParams, lastLayer = 'PipeInput', traces=[];
            let {logProb} = T.tidy(()=>{
                for(let layer of Pipeline){
                    let layerOutput = this.layer(pipeValue[lastLayer], layer, netParams[layer.Name]);
                    lastLayer = layer.Name;
                    pipeValue[layer.Name] = layerOutput[layer.Name];
                    traces.push({[layer.Name]: layerOutput.trace});
                    if(this.logger.debug){
                        this.logger.debug({traces});
                    }
                }
                
                let pipeOutput = pipeValue['PipeOutput'];
                let logProb = pipeOutput.sub(T.logSumExp(pipeOutput, 1, true));
                let predict = logProb.argMax(1);
                return {logProb, predict};
            });
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