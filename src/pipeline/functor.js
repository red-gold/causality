import { Functor as BaseFunctor } from 'causal-net.core';
import { platform } from 'causal-net.utils';
import { default as PipelineFunctorMixins } from './pipelineFunctor.mixins';

export default class Functor extends platform.mixWith( BaseFunctor,[PipelineFunctorMixins] ){
    constructor(){
        super();
    }
}