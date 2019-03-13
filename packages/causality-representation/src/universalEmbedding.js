import * as use from '@tensorflow-models/universal-sentence-encoder';
import { Platform } from 'causal-net.utils';
import { Tensor } from 'causal-net.core';
import { Fetch } from 'causal-net.utils';
/**
 *
 * This UniversialEmbedding provide methods for transform sentences into 
 * its single vector representation 
 * based on [use](https://github.com/tensorflow/tfjs-models/tree/master/universal-sentence-encoder)
 * @class UniversialEmbedding
 * @extends Tensor
 */
class UniversialEmbedding extends Platform.mixWith(Tensor, []){
    
    constructor(){
        super();
        /**
         * @private { TensorModel } 
         */
        this.use = use;
        this.model = null;
    }
    
    async connect(){
        if(global){
            //TODO: make better with Platform
            global.fetch = Fetch.fetch;
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
export default new UniversialEmbedding();