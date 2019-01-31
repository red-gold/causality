import { Tensor } from 'causal-net.core';
import { Platform, Fetch } from 'causal-net.utils';
import { StorageMixins, indexDBStorage } from 'causal-net.storage';
import { MemCacheMixins, memDownCache } from 'causal-net.memcache';
import { default as EmbeddingTransformMixins } from './wordEmbeddingTransform.mixins';
import { default as ChunkLookUpMixins } from './chunkLookup.mixins';
import { default as TokenLookUpMixins } from './tokenLookup.mixins';
import { default as Function } from './function';

class WordEmbeddingEN extends Platform.mixWith(Tensor, 
        [   StorageMixins, 
            MemCacheMixins,
            TokenLookUpMixins,
            ChunkLookUpMixins,
            EmbeddingTransformMixins ]){
    constructor(baseURL){
        super();
        this.Fetch = Fetch;
        this.Storage = indexDBStorage;
        this.MemCache = memDownCache;
        this.baseURL = baseURL;
        this.F = new Function();
        
        this.embeddingSavePath = '/embedding/';
        this.embeddingDescriptionPath = this.embeddingSavePath + 'description.json';
    }
    
    get VecSize(){
        if(!this.vecsize){
            throw Error('vecsize is not set');
        }
        return this.vecsize;
    }
    set VecSize(vecsize){
        if(!vecsize || +vecsize <=0 ){
            throw Error(`expect positive vecsize get ${vecsize}`);
        }
        this.vecsize = vecsize;
    }

    async getDescription(forceFecth=false){
        if(!this.description){
            try{
                let descriptionItem = await this.Storage.getItem(this.embeddingDescriptionPath);
                this.description = JSON.parse(descriptionItem[this.embeddingDescriptionPath]);
            }
            catch(err){
                this.logger.debug({'load description from storage': false});
                this.description = await this.fetchDescription();
            }
        }
        if(forceFecth){
            this.description = await this.fetchDescription();
        }
        this.TokenChunkIdMapper = (token)=>{
            return this.F.getIn([token], this.description.chunkLookUp, null);
        };
        this.VecSize = this.description.vecsize;
        return this.description;
        
    }
    async fetchDescription(){
        const DescriptionURL = this.baseURL + 'wordvec.description.json';
        this.logger.debug({DescriptionURL});
        const wvDescription = await Fetch.fetchJson(DescriptionURL);
        await this.Storage.setItem(this.embeddingDescriptionPath, JSON.stringify(wvDescription));
        this.description = wvDescription;
        return this.description;
    }
}

const BaseULR = "http://storage.googleapis.com/moderatordev-223307.appspot.com/WordVec_EN/";   
export default new WordEmbeddingEN(BaseULR);