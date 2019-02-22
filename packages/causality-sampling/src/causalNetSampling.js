import { Function } from 'causal-net.core';
import { Platform } from 'causal-net.utils';
import random from 'random';
import { default as SubSamplingMixins } from './subSampling.mixins';
import { default as NegSamplingMixins } from './negSampling.mixins';
class CausalNetSampling extends Platform.mixWith(Function, 
    [ SubSamplingMixins, NegSamplingMixins ]){
    constructor(){
        super();
        this.Random = random;    
    }
    
    get Random(){
        if(!this.random){
            throw Error(`random is not set`);
        }
        return this.random;
    }
    
    set Random(random){
        if(!random){
            throw Error(`expect random, got ${random}`);
        }
        this.random = random;
    }
}

export default new CausalNetSampling();