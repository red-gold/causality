import { Function } from 'causal-net.core';
import { Assert } from 'causal-net.utils';
/**
 * This SamplingMixins class provide mixins for PipelineClass or DatasetClass
 * @example
 * [EXAMPLE ../examples/sampling.mixins.babel.js]
 */
const SamplingMixins = (BasePipelineClass)=> class extends BasePipelineClass{
    /**
     * get current random instance
     */
    get Sampling(){
        if(!this.sampling){
            throw Error(`Sampling is not set`);
        }
        return this.sampling;
    }
    
    /**
     * set Sampling instance
     * @readonly
     */
    set Sampling(sampling){
        Assert.beInstanceOf(sampling, Function);
        this.sampling = sampling;
    }
};

export default SamplingMixins;