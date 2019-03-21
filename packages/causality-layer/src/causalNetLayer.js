import { Tensor as BaseTensor } from 'causal-net.core';
import { platform } from 'causal-net.utils';
import { default as DenseMixins } from './layers/dense.mixins'; 
/**
 * This CausalNetLayer class provide common use layers
 * mixWith:
 *  [ DenseMixins ]
 * @class CausalNetLayer
 * @extends BaseTensor
 */
class CausalNetLayer extends platform.mixWith(BaseTensor, [ DenseMixins] ){
    constructor(){
        super();
    }
}

export default new CausalNetLayer;