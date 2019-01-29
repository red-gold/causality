import { Tensor } from 'causal-net.core';
import { MultiLanguageEmbeddingMixins } from "./wordvec";
import { Platform, Fetch } from 'causal-net.utils';
import { StorageMixins, indexDBStorage } from 'causal-net.storage';
export default class WordEmbedding extends Platform.mixWith(Tensor, 
        [   MultiLanguageEmbeddingMixins, 
            StorageMixins ]){
    constructor(){
        super();
        this.Fetch = Fetch;
        this.Storage = indexDBStorage;
        this.embeddingSavePath = '/embedding/';
    }
}