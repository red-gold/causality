import { Platform } from 'causal-net.utils';
import { Tensor } from 'causal-net.core';
import { SingleLabelMixins, SequenceLabelsMixins } from './SupervisedModels/index';
import { WordContextModelMixins } from './UnSupervisedModels/index';
class CausalNetModels extends Platform.mixWith(Tensor, 
    [ SingleLabelMixins, 
      SequenceLabelsMixins,
      WordContextModelMixins ]){
    constructor(){
        super();
    }
}
export default new CausalNetModels;