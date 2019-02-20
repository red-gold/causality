import { Platform } from 'causal-net.utils';
import BaseMemCache from './baseMemCache';
import levelup from 'levelup';
import memdown from 'memdown';
import { default as MemorizingMixins } from './memorizing.mixins';
class MemoryCache extends Platform.mixWith(BaseMemCache,
    [ MemorizingMixins ]){
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

    async delItem(key){
        return new Promise((resolve, reject)=>{
            this.storage.del(key, (err)=>{
                if(err){
                    console.error({err});
                    reject('error write');
                }
                else{
                    resolve(key);
                }
            });
        });
    }

    createCheckItemNameFn(name){
        var pattern = name;
        var regex = new RegExp(`${pattern}.*`,'g');
        return (fileName)=>fileName.match(regex) || [];
    };

    async getItemList(namePath='/'){
        const NameTester = this.createCheckItemNameFn(filePath);
        return new Promise((resolve, reject)=>{
            let fileList = [];
            this.storage.createKeyStream()
                .on('data', (key) =>{
                    key = key.toString('utf8');
                    if(NameTester(key).length===1){
                        fileList.push(key);
                    }
                })
                .on('close', () => resolve(fileList) )
                .on('end',  () => resolve(fileList) )
                .on('error', (err) =>{ 
                    console.error(err);
                    reject('error getFileList') ;
                });
        });
    }
}

export default new MemoryCache();