import BaseMemCache from './baseMemCache';
import levelup from 'levelup';
import memdown from 'memdown';

export default class MemoryCache extends BaseMemCache{
    constructor(zone){
        super(zone);
        this.cache = levelup(memdown());        
    }
    async getItem(key, zone='/', asBuffer=false){
        return new Promise((resolve, reject)=>{
            this.cache.get(zone + key, {asBuffer}, (err, data)=>{
                if(err){
                    reject('error write');
                }
                else{
                    resolve({[key]: data});
                }
            });
        });
    }
    getItemBatch(keys, zone='/'){
        // return keys.map(key=>this.cache[zone+key]);
    }
    async setItem(key, data, zone='/'){
        return new Promise((resolve, reject)=>{
            this.cache.put(zone + key, data, (err)=>{
                if(err){
                    reject('error write');
                }
                else{
                    resolve({[key]: data});
                }
            });
        });
    }
}