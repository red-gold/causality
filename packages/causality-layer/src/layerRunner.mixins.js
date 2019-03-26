/**
 * This NetMixins class provide mixin for building pipeline
 * @class NetMixins
 * @extends BasePipelineClass
 * @example
 * [EXAMPLE ../examples/net.mixins.babel.js]
 */
const LayerRunnerMixins = (BasePipelineClass)=> class extends BasePipelineClass{
    setByConfig(pipelineConfig){
        if(super.setByConfig){
            super.setByConfig(pipelineConfig);
        }
        this.logger.groupBegin('set LayerRunner by config');
        const { Net } = pipelineConfig;
        const { Layers, Parameters } = Net; 
        this.LayerRunner.NetLayers = Layers;       
        this.LayerRunner.NetParameters = Parameters(Layers);
        this.logger.groupEnd();
    }

    set LayerRunner(runner){
        this.layerRunner = runner;
    }
    get LayerRunner(){
        if(!this.layerRunner){
            throw Error('layerRunner is not set');
        }
        return this.layerRunner;
    }
};

export default LayerRunnerMixins;