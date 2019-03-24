import { Tensor as BaseTensor } from 'causal-net.core';
import { platform } from 'causal-net.utils';
import { StorageMixins, indexDBStorage } from 'causal-net.storage';
import { default as ParameterMixins } from './parameter.mixins';
import { default as parameterfunctor } from './parameterFunctor';
/**
 * This CausalNetLayer class provide common use layers
 * { mixWith: [ DenseMixins ] }
 * @class CausalNetLayer
 * @extends BaseTensor
 */
class CausalNetParameters extends platform.mixWith(BaseTensor, [StorageMixins, ParameterMixins] ){
    constructor(storage, parameterfunctor){
        super();
        this.parameters = null;
        this.Storage = storage;
        this.F = parameterfunctor;
        this.R = this.F.CoreFunctor;
    }
}   

export default new CausalNetParameters(indexDBStorage, parameterfunctor);