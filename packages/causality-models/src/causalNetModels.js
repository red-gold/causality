import { default as Function } from './function';
import { Tensor as BaseTensor } from 'causal-net.core';
import { Platform } from 'causal-net.utils';
import { ClassificationModelMixins } from './supervisedModels/index'; 
class CausalNetModels extends Platform.mixWith(BaseTensor, 
    [ ClassificationModelMixins ]){
    constructor(){
        super();
        this.F = new Function();
    }
}

export default new CausalNetModels;