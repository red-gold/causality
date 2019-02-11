import { default as Tensor } from './tensor';
import { default as Function } from './function';
const causalNetCore = {
    get CoreFunction(){
        return new Function().CoreFunction; 
    },
    get CoreTensor(){
        return new Tensor().CoreTensor; 
    },
    get tensor(){
        return new Tensor();
    },
    get function(){
        return new Function();
    }
};
export { Tensor, Function, causalNetCore };
