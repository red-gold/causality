import { Tensor as BaseTensor } from 'causal-net.core';
import { platform } from 'causal-net.utils';
import { StorageMixins, indexDBStorage } from 'causal-net.storage';
import { default as functor } from './functor';
/**
 * This CausalNetLayer class provide common use layers
 * { mixWith: [ DenseMixins ] }
 * @class CausalNetLayer
 * @extends BaseTensor
 */
class CausalNetParameter extends platform.mixWith(BaseTensor, [StorageMixins] ){
    constructor(storage){
        super();
        this.parameters = null;
        this.Storage = storage;
        this.F = functor;
        this.R = this.F.CoreFunction;
    }
}   

export default new CausalNetParameter(indexDBStorage);