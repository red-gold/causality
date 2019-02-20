import { default as Tensor } from './tensor';
import { default as Function } from './function';
const causalNetCore = {
    get CoreFunction(){
        return Function.CoreFunction; 
    },
    get CoreTensor(){
        return Tensor.CoreTensor; 
    }
};
export { Tensor, Function, causalNetCore };
