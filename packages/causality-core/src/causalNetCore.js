import { default as Tensor } from './tensor';
import { default as Functor } from './functor';
/**
 * This class CausalNetCore provide access to core function and core tensor
 *
 * @class CausalNetCore
 * @example
 * [EXAMPLE ../examples/core.babel.js]
 */
class CausalNetCore{
    constructor(){
        this.F = new Functor();
        this.T = new Tensor();
    }
    get CoreFunction(){
        return this.F.CoreFunction; 
    }

    get CoreTensor(){
        return this.T.CoreTensor; 
    }
}
export default new CausalNetCore();