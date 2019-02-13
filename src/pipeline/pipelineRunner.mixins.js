const PipelineRunnerMixins = (PipelineClass)=> class extends PipelineClass{
    runOpFlow(value, flow, parameters){
        const R = this.R;
        const OpsRunner = R.addIndex(R.reduce)(R.__,{result: value, trace: {}}, flow);
        var {result, trace} = OpsRunner(({result, trace}, node, idx)=>{
            if(node.Parameter){
                let params = parameters[node.Parameter];
                result = result[node.Op](params, ...node.Args);
            }
            else{
                result = result[node.Op](...node.Args);    
            };
            trace[idx] = result.shape;
            return {result, trace};
        });
        return {result, trace};
    }

    runOpLayer(value, net, parameters){
        let result = net(value, parameters);
        let trace = {};
        return {result, trace};
    }
    runLayer(value, layerConfigure, layerParameters){
        const {Name, Type, Flow, Net} = layerConfigure;
        this.logger.debug({Name, Type, Flow, Net});
        if(Type === 'Tensor'){
            let {result, trace} = this.runOpFlow(value, Flow, layerParameters);
            return {[Name]: result, trace};
        }   
        else if(Type === 'Layer'){
            let {result, trace} = this.runOpLayer(value, Net, layerParameters);
            return {[Name]: result, trace};
        }   
        else{
            throw Error('type must be either Layer or Tensor');
        }
    }
    
    tracing(traces, name, trace){
        if(traces){
            traces.push({[name]: trace});
        }
    }
    runPipeline(samples, traces=[]){
        let pipeValue = {PipeInput: samples}, lastLayer = 'PipeInput';
        for(let layer of this.pipeline){
            let layerOutput = this.runLayer(pipeValue[lastLayer], layer, this.parameters[layer.Name]);
            pipeValue[layer.Name] = layerOutput[layer.Name];
            lastLayer = layer.Name;
            this.tracing(traces, layer.Name, layerOutput.trace);
        }
        this.logger.debug({traces});
        return pipeValue[lastLayer];
    }
}

export default PipelineRunnerMixins;