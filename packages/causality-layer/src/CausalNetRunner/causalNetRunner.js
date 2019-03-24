import { Tensor as BaseTensor } from 'causal-net.core';
import { platform } from 'causal-net.utils';
import { default as RunnerMixins } from './runner.mixins';
/**
 * This CausalNetLayer class provide common use layers
 * { mixWith: [ DenseMixins ] }
 * @class CausalNetLayer
 * @extends BaseTensor
 * @example
 * [EXAMPLE ../examples/runner.mixins.babel.js]
 */
class CausalNetRunner extends platform.mixWith(BaseTensor, [ RunnerMixins ] ){
    constructor(){
        super();
    }
}

export default new CausalNetRunner();