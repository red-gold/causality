import {default as AdamOptimizer} from './adamOptimizer';
/**
 * This CausalNetSGDOptimizer provide SGD optimizers based on Tensorflowjs optimizer
 *
 * @class CausalNetSGDOptimizer
 */
class CausalNetSGDOptimizer{
    constructor(){
    }
    adam(optimizerParams){
        return new AdamOptimizer(optimizerParams); 
    }
}

export default new CausalNetSGDOptimizer();