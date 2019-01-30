import { Tensor } from 'causal-net.core';
import { Platform, Fetch } from 'causal-net.utils';
import { StorageMixins, indexDBStorage } from 'causal-net.storage';
class WordEmbeddingEN extends Platform.mixWith(Tensor, 
        [ StorageMixins ]){
    constructor(baseURL){
        super();
        this.Fetch = Fetch;
        this.Storage = indexDBStorage;
        this.baseURL = baseURL;
        this.embeddingSavePath = '/embedding/';
    }
}

const BaseULR = "http://storage.googleapis.com/moderatordev-223307.appspot.com/wordvecs_EN/";
export default new WordEmbeddingEN(BaseULR);