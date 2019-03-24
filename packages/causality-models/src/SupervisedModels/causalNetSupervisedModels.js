import { platform } from 'causal-net.utils';
import { Tensor } from 'causal-net.core';
import { default as SingleLabelClassification } from './singleLableClassification';
class CausalNetModels extends platform.mixWith( Tensor, [] ){
    constructor(){
        super();
    }
    
    classification(numClass){
        this.model = new SingleLabelClassification(numClass);
        return this.model;
    }
}
export default new CausalNetModels();