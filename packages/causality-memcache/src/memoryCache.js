import BaseMemCache from './baseMemCache';

export default class MemoryCache extends BaseMemCache{
    constructor(zone, assertor=()=>{}){
        super(zone);
        this.cache = {};    
        this.assertor = assertor;
    }
    getItem(key){
        return this.cache[key];
    }
    setItem(key, data){
        this.assertor(data);
        this.cache[key] = data;
        return {key: this.cache[key]};
    }
}