import { default as Function } from './function';
import { Tensor as BaseTensor } from 'causal-net.core';
import { Platform } from 'causal-net.utils';
import { default as DenseMixins } from './layers/dense.mixins'; 
class CausalNetLayer extends Platform.mixWith(BaseTensor, [DenseMixins]){
    constructor(){
        super();
        this.F = new Function();
        this.R = this.F.CoreFunction;
    }
}

export default new CausalNetLayer;