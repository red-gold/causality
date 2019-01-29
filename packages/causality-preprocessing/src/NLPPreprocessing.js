import { Function as BaseFunction } from 'causal-net.core';
import { Platform } from 'causal-net.utils';
import { TokenizingMixins, WordFilteringMixins } from './NLP/index';
import { default as TokenizerEN } from './tokenizer.en';
class NLPPreprocessing extends Platform.mixWith(BaseFunction, 
    [   TokenizingMixins, 
        WordFilteringMixins ]){
    constructor(){
        super();
    }
    get Tokenizer(){
        if(!this.tokenizer){
            throw Error('tokenizer is not set');
        }
        return this.tokenizer;
    }
    set Tokenizer(tokenizer){
        this.tokenizer = tokenizer;
    }
}

export default new NLPPreprocessing;