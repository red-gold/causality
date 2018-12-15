import BaseMemCache from './baseMemCache';

export default class MemoryCache extends BaseMemCache{
    constructor(zone, assertor=()=>{}){
        super(zone);
        this.cache = {};    
        this.assertor = assertor;
    }
    getItem(key, zone='/'){
        return this.cache[zone+key];
    }
    getItemBatch(keys, zone='/'){
        return keys.map(key=>this.cache[zone+key]);
    }
    setItem(key, data, zone='/'){
        this.assertor(data);
        this.cache[zone+key] = data;
        return {key: this.cache[zone+key]};
    }
}