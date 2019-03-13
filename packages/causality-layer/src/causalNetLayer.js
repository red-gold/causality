import { default as Function } from './function';
import { Tensor as BaseTensor } from 'causal-net.core';
import { Platform } from 'causal-net.utils';
import { default as DenseMixins } from './layers/dense.mixins'; 
/**
 * This CausalNetLayer class provide common use layers
 * mixWith:
 *  [ DenseMixins ]
 * @class CausalNetLayer
 * @extends BaseTensor
 */
class CausalNetLayer extends Platform.mixWith(BaseTensor, [DenseMixins]){
    constructor(){
        super();
        this.F = new Function();
    }
}

export default new CausalNetLayer;