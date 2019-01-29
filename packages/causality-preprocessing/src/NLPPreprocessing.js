import { Function as BaseFunction } from 'causal-net.core';
import { Platform } from 'causal-net.utils';
import { TokenizingMixins, WordFilteringMixins } from './NLP/index';
class NLPPreprocessing extends Platform.mixWith(BaseFunction, 
    [ TokenizingMixins, WordFilteringMixins ]){
    constructor(){
        super();
    }
}

export default new NLPPreprocessing;