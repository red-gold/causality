import {Functor as BaseFunctor} from 'causal-net.core';
import {Platform} from 'causal-net.utils';
import {default as ParameterFunctorMixins } from './parameterFunctor.mixins';

class Functor extends Platform.mixWith(BaseFunctor, [ ParameterFunctorMixins ] ){
    constructor(){
        super();
    }
}

export default new Functor();