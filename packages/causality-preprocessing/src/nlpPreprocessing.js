import { Function as BaseFunction } from 'causal-net.core';
import { Platform } from 'causal-net.utils';
import { TokenTransformingMixins } from './NLP/index';
/**
 * This NLPPreprocessing class provide methods for preprocessing text and output valid tokens.
 * { MixWith:
 *     [ TokenTransformingMixins ]) }
 * @class NLPPreprocessing
 * @extends BaseFunction
 * @example
 * [!EXAMPLE ../examples/nlpPreprocessing.babel.node.js]
 */

class NLPPreprocessing extends Platform.mixWith(BaseFunction, 
    [ TokenTransformingMixins ]){
    constructor(){
        super();
    }
    /**
     * This method is used in case tokenizer requires data setup.
     * @param { Url|FilePath } configLink
     * @memberof NLPPreprocessing
     */
    connect(configLink){
        this.tokenizer.connect(configLink);
    }
    /**
     * Get tokenizer
     *
     * @memberof NLPPreprocessing
     */
    get Tokenizer(){
        if(!this.tokenizer){
            throw Error('tokenizer is not set');
        }
        return this.tokenizer;
    }
    /**
     * Set tokenizer
     * @param { Object } tokenizer - tokenizer object
     * @memberof NLPPreprocessing
     */
    set Tokenizer(tokenizer){
        this.tokenizer = tokenizer;
    }
}

export default new NLPPreprocessing;