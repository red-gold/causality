import { platform } from 'causal-net.utils';
import { Tensor } from 'causal-net.core';
import { default as SingleLabelClassification } from './singleLableClassification';
class CausalNetModels extends platform.mixWith( Tensor, [] ){
    constructor(){
        super();
    }
    classification(numClass){
        return new SingleLabelClassification(numClass);
    }
}
export default new CausalNetModels();