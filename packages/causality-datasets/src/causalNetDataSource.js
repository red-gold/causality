import { EventEmitter } from 'events';
import { Functor } from 'causal-net.core';
import { platform } from 'causal-net.utils';

class CausalNetDataSource extends platform.mixWith(EventEmitter, []){
    constructor(functor){
        this.F = functor;
    }
    async connect(descriptionLink){
        this.description = this.query(descriptionLink);
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
};
let functor = new Functor();
export default new CausalNetDataSource(functor);