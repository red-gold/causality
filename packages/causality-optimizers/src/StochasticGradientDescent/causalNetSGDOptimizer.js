import {default as AdamOptimizer} from './adamOptimizer';
/**
 * This class provides optimizing methods which can be accessed via **causalNetSGDOptimizer** instance.
 *
 * @class CausalNetSGDOptimizer
 * @extends {Tensor}
 * @example
 * [EXAMPLE ../examples/causalNetSGDOptimizers.babel.js]
 */
class CausalNetSGDOptimizer extends platform.mixWith(BaseTensor, [SGDFitParamsMixins]){
    constructor(){
    }
    adam(optimizerParams){
        return new AdamOptimizer(optimizerParams); 
    }
}

export default new CausalNetSGDOptimizer();