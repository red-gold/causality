import { Functor as BaseFunctor } from 'causal-net.core';
import { platform } from 'causal-net.utils';
import random from 'random';
import { default as SubSamplingMixins } from './subSampling.mixins';
import { default as NegSamplingMixins } from './negSampling.mixins';

/**
 * This class provides common used sampling methods which can be accessed via **causalNetSampling**.
 * mixwith:
 * [ SubSamplingMixins, NegSamplingMixins ]
 * @class CausalNetSampling
 * @extends Functor
 * @example
 * [EXAMPLE ../examples/causalNetSampling.babel.js]
 */
class CausalNetSampling extends platform.mixWith( BaseFunctor, 
    [ SubSamplingMixins, NegSamplingMixins ]){
    constructor(random){
        super();
        this.Random = random;    
    }
    random(shape, distribution='normal', {...args}={}){
        const length = shape.reduce((cd,s)=>cd*s);
        const generator = this.Random.normal();
        return this.R.range(0,length).map(()=>generator());
    }
}

export default new CausalNetSampling(random);