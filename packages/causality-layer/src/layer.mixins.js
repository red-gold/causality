import { Assert } from 'causal-net.utils';
import { Tensor } from 'causal-net.core';
/**
 * This LayerMixins class provide mixin for building pipeline
 * mixWith:
 *  [ DenseMixins ]
 * @class CausalNetLayer
 * @extends BaseTensor
 */
const LayerMixins = (BasePipelineClass)=> class extends BasePipelineClass{
    get Layer(){
        if(!this.layer){
            throw Error('layer is not set');
        }
        this.layer;
    }
    set Layer(layer){
        Assert.beInstanceOf(layer, Tensor);
        this.layer = layer;
    }
};

export default LayerMixins;