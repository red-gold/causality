import { Tensor as BaseTensor } from 'causal-net.core';
import { platform } from 'causal-net.utils';
import { default as DenseMixins } from './dense.mixins';
import { default as LayerMixins } from './layer.mixins';
/**
 * This CausalNetLayer class provide common use layers
 * { mixWith: [ LayerMixins, DenseMixins ] }
 * @class CausalNetLayer
 * @extends BaseTensor
 */
class CausalNetLayers extends platform.mixWith(BaseTensor, 
    [ LayerMixins, DenseMixins ] ){
    constructor(){
        super();
        this.layerNames = [];
    }
    nameGenerator(layerType){
        const layerIdx = this.layerNames.length; 
        let newName = layerType + '/' + layerIdx;
        this.layerNames.push(newName);
        return newName;
    }
}

export default new CausalNetLayers();