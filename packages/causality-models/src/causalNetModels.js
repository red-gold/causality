import { platform } from 'causal-net.utils';
import { Tensor as BaseTensor } from 'causal-net.core';
/**
 * This class provide common used models which can be accessed via **causalNetModels** instance.
 * @class CausalNetModels
 * @extends BaseTensor
 * @example
 * [EXAMPLE ../examples/singleLabelClassification.babel.js]
 */
class CausalNetModels extends platform.mixWith( BaseTensor, [] ){
    constructor(){
        super();
    }
    
    classification(numClass){
        this.model = new SingleLabelClassification(numClass);
        return this.model;
    }
}
export default new CausalNetModels();