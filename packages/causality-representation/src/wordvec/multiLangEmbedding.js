import { Tensor } from 'causal-net.core';
import { Platform, Fetch } from 'causal-net.utils';
import { StorageMixins, indexDBStorage } from 'causal-net.storage';
export default class MultiLangWordEmbedding extends Platform.mixWith(Tensor, 
        [ StorageMixins ]){
    constructor(){
        super();
        this.Fetch = Fetch;
        this.Storage = indexDBStorage;
        this.embeddingSavePath = '/embedding/';
    }
}

export default new MultiLangWordEmbedding();