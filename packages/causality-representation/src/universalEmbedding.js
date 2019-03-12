import * as use from '@tensorflow-models/universal-sentence-encoder';
import { Platform } from 'causal-net.utils';
import { Tensor } from 'causal-net.core';
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
        
        this.use.bind(this);
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