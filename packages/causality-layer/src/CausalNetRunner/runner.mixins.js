/**
 * This RunnerMixins class provide methods for runner class.
 * @class RunnerMixins
 * @extends BaseRunnerClass
 */
const RunnerMixins = ( BaseRunnerClass )=> class extends BaseRunnerClass{
    set NetParameters(parameters){
        this.netParameters = parameters;
    }
    set NetLayers(netLayers){
        this.netLayers = netLayers;
    }
    get NetParameters(){
        if(!this.netParameters){
            throw Error('netParameters is not set');
        }
        return this.netParameters;
    }
    get NetLayers(){
        if(!this.netLayers){
            throw Error('netLayers is not set');
        }
        return this.netLayers;
    }
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
        let { result, trace } = net(value, parameters);
        return {result, trace};
    }
    runLayer(value, layerConfigure, layerParameters){
        const {Name, Type, Flow, Net} = layerConfigure;
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
    run(layers, samples, parameters, traces=null){
        let pipeValue = {PipeInput: samples}, lastLayer = 'PipeInput';
        for(let layer of layers){
            let layerOutput = this.runLayer(pipeValue[lastLayer], layer, parameters[layer.Name]);
            pipeValue[layer.Name] = layerOutput[layer.Name];
            lastLayer = layer.Name;
            this.tracing(traces, layer.Name, layerOutput.trace);
        }
        if(traces){
            this.logger.debug({traces});
        }
        return pipeValue[lastLayer];
    }

    get PredictRunner(){
        let predictLayers = this.NetLayers.Predict;
        let predictParameters = this.NetParameters.PredictParameters;
        return (samples)=>{
            return this.run(predictLayers, samples, predictParameters);
        };
    }
    get EncodeRunner(){
        let encodeLayers = this.NetLayers.Encode;
        let encodeParameters = this.NetParameters.EncodeParameters;
        return (samples)=>{
            return this.run(encodeLayers, samples, encodeParameters);
        };
    }
    get DecodeRunner(){
        let decodeLayers = this.NetLayers.Decode;
        let decodeParameters = this.NetParameters.DecodeParameters;
        return (samples)=>{
            return this.run(decodeLayers, samples, decodeParameters);
        };
    }
};

export default RunnerMixins;
