import {Function as BaseFunction} from 'causal-net.core';
import {Platform} from 'causal-net.utils';
import {default as PipelineFunctionMixins} from './pipelineFunction.mixins';

export default class Function extends Platform.mixWith(BaseFunction,[PipelineFunctionMixins]){
    constructor(){
        super();
    }
}