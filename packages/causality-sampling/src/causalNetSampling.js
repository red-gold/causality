import { Functor as BaseFunctor } from 'causal-net.core';
import { platform } from 'causal-net.utils';
import random from 'random';
import { default as SubSamplingMixins } from './subSampling.mixins';
import { default as NegSamplingMixins } from './negSampling.mixins';

/**
 * This CausalNetSampling class provides sampling methods
 * mixwith:
 * [ SubSamplingMixins, NegSamplingMixins ]
 * @class CausalNetSampling
 * @extends Functor
 * @example
 * [EXAMPLE ../examples/causalNetSampling.babel.js]
 */
class CausalNetSampling extends platform.mixWith( BaseFunctor, 
    [ SubSamplingMixins, NegSamplingMixins ]){
    constructor(){
        super();
        this.Random = random;    
    }
}

export default new CausalNetSampling();