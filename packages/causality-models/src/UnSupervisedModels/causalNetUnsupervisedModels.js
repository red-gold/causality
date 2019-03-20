import { platform } from 'causal-net.utils';
import { Tensor } from 'causal-net.core';
import { default as AutoEncoder } from './autoEncoder';
class CausalNetUnsupervisedModels extends platform.mixWith( Tensor, []){
    constructor(){
        super();
    }

    autoEncoder(){
        return new AutoEncoder();
    }
}
export default new CausalNetUnsupervisedModels();