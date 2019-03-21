import { assert } from 'causal-net.utils';
import { Tensor as BaseTensor } from 'causal-net.core';
/**
 * This LayerMixins class provide mixin for building pipeline
 * @class CausalNetLayer
 * @extends BasePipelineClass
 * @example
 * [EXAMPLE ../examples/layer.mixins.babel.js]
 */
const LayerMixins = (BasePipelineClass)=> class extends BasePipelineClass{
    get Layer(){
        if(!this.layer){
            throw Error('layer is not set');
        }
        this.layer;
    }
    set Layer(layer){
        assert.beInstanceOf(layer, BaseTensor);
        this.layer = layer;
    }
};

export default LayerMixins;