import { platform, fetch } from 'causal-net.utils';
import { Tensor } from 'causal-net.core';
import { default as VectorMetricMixins } from './vectorMetrics.mixins';

/**
 * This UniversalEmbedding provide methods for transform sentences into 
 * its single vector representation 
 * based on [use](https://github.com/tensorflow/tfjs-models/tree/master/universal-sentence-encoder)
 * 
 * @class UniversalEmbedding
 * @extends {Tensor}
 * @example
 * [EXAMPLE ../examples/universalEmbedding.babel.js]
 */
class UniversalEmbedding extends platform.mixWith(Tensor, 
    [ VectorMetricMixins ]){
    
    constructor(){
        super();
        /**
         * @private { TensorModel } 
         */
        this.use = require('@tensorflow-models/universal-sentence-encoder');
        this.model = null;
    }
    
    async connect(){
        if(global){
            //TODO: make better with platform
            global.fetch = fetch.fetch;
        }
        this.model = await this.use.load();
        return this;
    }

    async sentenceEncode(sentences){
        if(!this.model){
            throw Error(`model is not connect`);
        }
        let embeddings = await this.model.embed(sentences);
        return embeddings;
    }
}
export default new UniversalEmbedding();