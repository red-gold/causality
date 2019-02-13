import { default as Tensor } from './tensor';
import { default as Function } from './function';
const causalNetCore = {
    get CoreFunction(){
        return new Function().CoreFunction; 
    },
    get CoreTensor(){
        return new Tensor().CoreTensor; 
    }
};
export { Tensor, Function, causalNetCore };
