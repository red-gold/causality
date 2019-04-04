import { Tensor as BaseTensor } from 'causal-net.core';
import { platform } from 'causal-net.utils';
import { default as DenseMixins } from './dense.mixins';
/**
 * This class provides common used layers which can be accessed via **causalNetLayers** instance.
 * { mixWith: [ LayerMixins, DenseMixins ] }
 * @class CausalNetLayers
 * @extends BaseTensor
 * @example
 * [EXAMPLE ../examples/dense.layer.js]
 */
class CausalNetLayers extends platform.mixWith(BaseTensor, 
    [ DenseMixins ] ){
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