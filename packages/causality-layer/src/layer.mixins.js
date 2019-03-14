import { assert } from 'causal-net.utils';
import { Tensor } from 'causal-net.core';
/**
 * This LayerMixins class provide mixin for building pipeline
 * @class CausalNetLayer
 * @extends BasePipelineClass
 * @example
 * 
 */
const LayerMixins = (BasePipelineClass)=> class extends BasePipelineClass{
    get Layer(){
        if(!this.layer){
            throw Error('layer is not set');
        }
        this.layer;
    }
    set Layer(layer){
        assert.beInstanceOf(layer, Tensor);
        this.layer = layer;
    }
};

export default LayerMixins;