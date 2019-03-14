import { Function as BaseFunction } from 'causal-net.core';
import { platform } from 'causal-net.utils';
import random from 'random';
import { default as SubSamplingMixins } from './subSampling.mixins';
import { default as NegSamplingMixins } from './negSampling.mixins';

/**
 * This CausalNetSampling class provides sampling methods
 * mixwith:
 * [ SubSamplingMixins, NegSamplingMixins ]
 * @class CausalNetSampling
 * @extends Function
 * @example
 * [EXAMPLE ../examples/causalNetSampling.babel.js]
 */
class CausalNetSampling extends platform.mixWith( BaseFunction, 
    [ SubSamplingMixins, NegSamplingMixins ]){
    constructor(){
        super();
        this.Random = random;    
    }
}

export default new CausalNetSampling();