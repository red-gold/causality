/**
 * This NetMixins class provide mixin for building pipeline
 * @class NetMixins
 * @extends BasePipelineClass
 * @example
 * [EXAMPLE ../examples/net.mixins.babel.js]
 */
const NetMixins = (BasePipelineClass)=> class extends BasePipelineClass{
    getNetFromConfig(pipelineConfig){
        const { Net } = pipelineConfig;
        const { Layers, Parameters } = Net;
        this.NetLayers = Layers;
        this.NetParameters.setOrInitParams(Layers, Parameters);
    }
    set NetParameters(parameters){
        this.netParameters = parameters;
    }
    get NetParameters(){
        if(!this.netParameters){
            throw Error('netRunner is not set');
        }
        return this.netParameters;
    }
    set NetRunner(runner){
        this.netRunner = runner;
    }
    get NetRunner(){
        if(!this.netRunner){
            throw Error('netRunner is not set');
        }
        return this.netRunner;
    }

    set NetLayers(layers){
        console.log({layers});
        this.netLayers = layers;
    }

    get NetLayers(){
        if(!this.netLayers){
            throw Error('netLayers is not set');
        }
        return this.netLayers;
    }

    netPredict(samples, traces=null){
        const NetRunner = this.NetRunner, NetParameters = this.NetParameters;
        let predictLayers = this.NetLayers.Predict;
        let predictParameters = NetParameters.PredictParameters;
        
        return NetRunner.run(predictLayers, samples, predictParameters, traces);
    }

    netEncode(samples, traces=null){
        const NetRunner = this.NetRunner, NetParameters = this.NetParameters;
        let encodeLayers = this.NetLayers.Encode;
        let encodeParameters = NetParameters.EncodeParameters;
        return NetRunner.run(encodeLayers, samples, encodeParameters, traces);
    }

    netDecode(samples, traces=null){
        const NetRunner = this.NetRunner, NetParameters = this.NetParameters;
        let decodeLayers = this.NetLayers.Decode;
        let decodeParameters = NetParameters.DecodeParameters;
        return NetRunner.run(decodeLayers, samples, decodeParameters, traces);
    }
};

export default NetMixins;