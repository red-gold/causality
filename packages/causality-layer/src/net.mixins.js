/**
 * This NetMixins class provide mixin for building pipeline
 * @class CausalNetLayer
 * @extends BasePipelineClass
 * @example
 * [EXAMPLE ../examples/net.mixins.babel.js]
 */
const NetMixins = (BasePipelineClass)=> class extends BasePipelineClass{
    getNetFromConfig(pipelineConfig){
        const { Net } = pipelineConfig;
        const { Layers, Parameters } = Net;
        this.NetRunner.Layers = Layers;
        this.NetParameters.setOrInitParams(Parameters, Layers);
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

    netPredict(samples, traces=[]){
        const NetRunner = this.NetRunner, NetParameters = this.NetParameters;
        let predictLayers = NetRunner.PredictLayers;
        let predictParameters = NetParameters.PredictParameters;
        let runner = this.NetRunner;
        return runner.run(predictLayers, samples, predictParameters, traces);
    }

    netEncode(samples, traces=[]){
        const NetRunner = this.NetRunner, NetParameters = this.NetParameters;
        let encodeLayers = NetRunner.EncodeLayers;
        let encodeParameters = NetParameters.EncodeParameters;
        let runner = this.NetRunner;
        return runner.run(encodeLayers, samples, encodeParameters, traces);
    }

    netDecode(samples, traces=[]){
        const NetRunner = this.NetRunner, NetParameters = this.NetParameters;
        let decodeLayers = NetRunner.DecodeLayers;
        let decodeParameters = NetParameters.DecodeParameters;
        let runner = this.NetRunner;
        return runner.run(decodeLayers, samples, decodeParameters, traces);
    }
};

export default NetMixins;