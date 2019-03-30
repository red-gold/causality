import { EventEmitter } from 'events';
import { Functor } from 'causal-net.core';
import { platform, jsonUtils } from 'causal-net.utils';

class CausalNetDataSource extends platform.mixWith(EventEmitter, []){
    constructor(functor){
        super();
        this.F = functor;
    }
    async connect(descriptionLink){
        this.description = await this.query(descriptionLink);
        return this.description;
    }

    /**
     * fetch or read configure depends on provied link format
     * @private
     * @param {*} link
     * @returns
     * @memberof CausalNetEmbedding
     */
    async query(link){
        if(link.startsWith('http')){
            return await jsonUtils.fetchJson(link);
        }
        else{
            return await jsonUtils.readJSON(link);
        }
    }

    get DataChunk(){
        return this.dataChunks;
    }

    set DataChunk(chunkList){
        this.dataChunks = chunkList;
    }

    selectChunks(numChunks=null){
        let chunkList = [];
        if(!numChunks){
            chunkList = this.description.chunkList;
        }
        else{
            
        }
        
    }
};
let functor = new Functor();
export default new CausalNetDataSource(functor);