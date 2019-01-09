import BaseMemCache from './baseMemCache';
import levelup from 'levelup';
import memdown from 'memdown';

export default class MemoryCache extends BaseMemCache{
    constructor(zone){
        super(zone);
        this.cache = levelup(memdown());        
    }
    async getItem(key, asBuffer=false){
        return new Promise((resolve, reject)=>{
            this.cache.get(key, {asBuffer}, (err, data)=>{
                if(err){
                    reject('error write');
                }
                else{
                    resolve({[key]: data});
                }
            });
        });
    }
    
    async setItem(key, data){
        return new Promise((resolve, reject)=>{
            this.cache.put(key, data, (err)=>{
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