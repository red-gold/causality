/**
 * This LayerMixins class provide mixin for building pipeline
 * @class CausalNetLayer
 * @extends BasePipelineClass
 * @example
 * [EXAMPLE ../examples/layer.mixins.babel.js]
 */
const LayerMixins = (BasePipelineClass)=> class extends BasePipelineClass{
    get DecodeLayers(){
        if(!this.decodeLayers){
            throw Error('decodeLayers is not set');
        }
        this.decodeLayers;
    }

    get EncodeLayers(){
        if(!this.encodeLayers){
            throw Error('encodeLayers is not set');
        }
        this.encodeLayers;
    }
    
    get PredictLayers(){
        if(!this.predictLayers){
            throw Error('predictLayers is not set');
        }
        this.predictLayers;
    }

    set DecodeLayers(decodeLayers){
        this.decodeLayers = decodeLayers;
    }
    
    set EncodeLayers(encodeLayers){
        this.encodeLayers = encodeLayers;
    }
    set PredictLayers(predictLayers){
        this.predictLayers = predictLayers;
    }
};

export default LayerMixins;