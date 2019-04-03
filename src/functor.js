import { Functor as BaseFunctor } from 'causal-net.core';
import { platform } from 'causal-net.utils';

class ParameterFunctor extends platform.mixWith(BaseFunctor, [  ] ){
    constructor(){
        super();
    }
}

export default new ParameterFunctor();