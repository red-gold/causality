import { Function as BaseFunction } from 'causal-net.core';
import { Platform } from 'causal-net.utils';
import { TokenizingMixins, TokenTransformingMixins } from './NLP/index';
import { default as TokenizerEN } from './tokenizer.en';
class NLPPreprocessing extends Platform.mixWith(BaseFunction, 
    [   TokenizingMixins, 
        TokenTransformingMixins ]){
    constructor(){
        super();
        this.Tokenizer = TokenizerEN;
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