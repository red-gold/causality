import { Tensor } from 'causal-net.core';
import { platform } from 'causal-net.utils';
import { LoggerMixins, termLogger } from 'causal-net.log';
import { StorageMixins, indexDBStorage } from 'causal-net.storage';
import { LayerMixins, causalNetLayer } from 'causal-net.layer';
import { SupervisedModelsMixins, causalNetModels } from 'causal-net.models';
import { TrainerMixins } from 'causal-net.optimizers';

class CausalNet extends platform.mixWith(Tensor, [
        StorageMixins,
        LoggerMixins
    ]){
    constructor(functor){
        super();
        this.F = functor;
        this.R = this.F.CoreFunction;
    }  
}

export default CausalNet()