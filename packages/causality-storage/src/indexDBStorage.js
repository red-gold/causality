import {Platform, Fetch} from 'causal-net.utils';
import {default as BaseStorage} from './baseStorage';
import {default as PNGFileMixins} from './PNGFileMixins';
import {default as LevelDownMixins} from './indexDBStorage.mixins.node';
import {default as LevelJSMixins} from './indexDBStorage.mixins.web';


class IndexDBStorage extends Platform.mixWith(BaseStorage, 
                       {'node': [LevelDownMixins, TextFileMixins, PNGFileMixins],
                         'web': [LevelJSMixins, TextFileMixins, PNGFileMixins]}){

    reformateName(key){
        key = key.replace(/\/{2,3,4,5}/g,'/');
        if(key[0]==='/'){
            return key;
        }
        else{
            return '/' + key;
        }
    };

    async getItem(key, asBuffer=false){
        return new Promise((resolve, reject)=>{
            this.storage.get(key, {asBuffer}, (err, data)=>{
                if(err){
                    console.error({err});
                    reject('error read');
                }
                else{
                    resolve({[key]: data});
                }
            });
        });
    }
    
    
    async setItem(key, data){
        
        return new Promise((resolve, reject)=>{
            key = this.reformateName(key);
            this.storage.put(key, data, (err)=>{
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

    async delItem(key){
        return new Promise((resolve, reject)=>{
            key = this.reformateName(key);
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

    async batch(ops){
        return new Promise((resolve, reject)=>{
            this.storage.batch(ops, (err, data)=>{
                if(err){
                    console.error({err});
                    reject('error ops');
                }
                else{
                    resolve(ops);
                }
            });
        });
    }


    async deleteItem(filePath){
        return new Promise((resolve, reject)=>{
            this.storage.del(filePath, (err)=>{
                if(err){
                    console.error({err});
                    reject('error ops');
                }
                else{
                    resolve(ops);
                }
            });
        });
    }
}

export default new IndexDBStorage();