import { Function as BaseFunction } from 'causal-net.core';
import { Platform } from 'causal-net.utils';
import { default as WordEmbeddingFunctionMixins } from './wordEmbeddingFunction.mixins';
export default class Function extends Platform.mixWith(BaseFunction, [WordEmbeddingFunctionMixins]){
    constructor(){
        super();
    }
}