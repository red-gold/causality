import { Platform } from 'causal-net.utils';
import { Tensor } from 'causal-net.core';
import { ClassificationModelMixins } from './SupervisedModels/index';
import { WordContextModelMixins } from './UnSupervisedModels/index';
class CausalNetModels extends Platform.mixWith(Tensor, 
    [ ClassificationModelMixins, WordContextModelMixins ]){
    constructor(){
        super();
    }
}
export default new CausalNetModels;