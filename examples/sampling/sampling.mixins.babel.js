import { SamplingMixins, causalNetSampling } from 'causal-net.sampling';
import { Platform } from 'causal-net.utils';
import { Tensor, Functor } from 'causal-net.core';

class SimplePipeline extends Platform.mixWith(Tensor, [SamplingMixins]){
    constructor(){
        super();
        this.Sampling = causalNetSampling;
    }
}
let pipeline = new SimplePipeline();
console.log(pipeline.Sampling);