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
        this.NetParameters.setOrInitParams(Layers, Parameters);
        this.NetRunner.NetLayers = Layers;
        this.NetRunner.NetParameters = this.NetParameters;
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
};

export default NetMixins;