const PipelineLayersMixins = (PipelineClass)=> class extends PipelineClass{
    set Pipeline(pipeline){
        this.pipeline = pipeline;
    }
    get Pipeline(){
        this.pipeline;
    }
    setPipelineByConfig(netConfig){
        this.basePipeline = this.F.getPipeline(netConfig);
    }
    runOpFlow(value, flow, parameters){
        const R = this.R;
        const OpsRunner = R.addIndex(R.reduce)(R.__,{result: value, trace: {}}, flow);
        var {result, trace} = OpsRunner(({result, trace}, node, idx)=>{
            if(node.Parameter){
                result = this.T[node.Op](result, parameters[node.Parameter], ...node.Args);
            }
            else{
                result.print();
                console.log(node.Args);
                result = this.T[node.Op](result, ...node.Args);    
            };
            trace[idx] = result.shape;
            return {result, trace};
        });
        return {result, trace};
    }
    runOpNet(value, net, parameters){
        let result = net(value, parameters);
        let trace = {};
        return {result, trace}
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
            throw Error('type must be one of Net or Tensor')
        }
    }
    tracing(traces, layer, layerOutput){
        if(traces){
            traces.push({[layer.Name]: layerOutput.trace});
        }
    }
    runPipeline(samples, traces=[]){
        console.log({pipeline: this.pipeline});
        let pipeValue = {PipeInput: samples}, lastLayer = 'PipeInput';
        for(let layer of this.pipeline){
            let layerOutput = this.runLayer(pipeValue[lastLayer], layer, this.parameters[layer.Name]);
            lastLayer = layer.Name;
            pipeValue[layer.Name] = layerOutput[layer.Name];
            this.tracing(traces, layer, layerOutput);
        }
        this.logger.debug({traces});
        return pipeValue[lastLayer];
    }
}
export default PipelineLayersMixins;