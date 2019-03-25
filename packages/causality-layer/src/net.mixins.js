/**
 * This NetMixins class provide mixin for building pipeline
 * @class NetMixins
 * @extends BasePipelineClass
 * @example
 * [EXAMPLE ../examples/net.mixins.babel.js]
 */
const NetMixins = (BasePipelineClass)=> class extends BasePipelineClass{
    setByConfig(pipelineConfig){
        if(super.setByConfig){
            super.setByConfig(pipelineConfig);
        }
        this.logger.groupBegin('set Net by config');
        const { Net } = pipelineConfig;
        const { Layers, Parameters } = Net; 
        this.Layers = Layers;       
        this.Parameters.setOrInitParams(Layers, Parameters);
        this.logger.groupEnd();
    }

    set Layers(layers){
        this.netLayers = layers;
    }

    get Layers(){
        if(!this.netLayers){
            throw Error('netLayers is not set');
        }
        return this.netLayers;
    }

    set Parameters(parameters){
        this.netParameters = parameters;
    }
    get Parameters(){
        if(!this.netParameters){
            throw Error('netRunner is not set');
        }
        return this.netParameters;
    }
    set Net(runner){
        this.netRunner = runner;
    }
    get Net(){
        this.netRunner.NetLayers = this.Layers;
        this.netRunner.NetParameters = this.Parameters;
        return this.netRunner;
    }
};

export default NetMixins;