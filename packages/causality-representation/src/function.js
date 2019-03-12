import { Function as BaseFunction } from 'causal-net.core';
import { Platform } from 'causal-net.utils';
import { default as WordEmbeddingFunctionMixins } from './wordEmbeddingFunction.mixins';
/**
 * This Function class provides methods for common used ultilities function
 * @export
 * @class Function
 * @extends BaseFunction
 */
export default class Function extends Platform.mixWith(BaseFunction, 
        [WordEmbeddingFunctionMixins]){
    constructor(){
        super();
    }
}