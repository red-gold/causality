/**
 * This NetMixins class provide mixin for building pipeline
 * @class NetMixins
 * @extends BasePipelineClass
 * @example
 * [EXAMPLE ../examples/net.mixins.babel.js]
 */
const LayerRunnerMixins = (BasePipelineClass)=> class extends BasePipelineClass{
    async saveParams(fileName){
        return await this.LayerRunner.NetParameters.saveParams(fileName);
    }
    async loadParams(fileName){
        return await this.LayerRunner.NetParameters.loadParams(fileName);
    }

    async getSavedParamList(){
        return await this.LayerRunner.NetParameters.getSavedParamList();
    }

    setByConfig(pipelineConfig){
        if(super.setByConfig){
            super.setByConfig(pipelineConfig);
        }
        this.Logger.groupBegin('set LayerRunner by config');
        const { Net } = pipelineConfig;
        const { Layers, Parameters } = Net; 
        this.LayerRunner.NetLayers = Layers;       
        this.LayerRunner.NetParameters = Parameters(Layers);
        this.Logger.groupEnd();
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