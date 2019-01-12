import {Platform, Fetch} from 'causal-net.utils';
import {default as BaseStorage} from './baseStorage';
import {default as PNGFileMixins} from './PNGFileMixins';
import {default as LevelDownMixins} from './levelDBStorage.mixins.node';
import {default as LevelJSMixins} from './levelDBStorage.mixins.web';

class LevelDBStorage extends Platform.mixWith(BaseStorage, 
                       {'node': [LevelDownMixins, PNGFileMixins],
                         'web': [LevelJSMixins, PNGFileMixins]}){

    async getItem(key, asBuffer=false){
        return new Promise((resolve, reject)=>{
            this.storage.get(key, {asBuffer}, (err, data)=>{
                if(err){
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
            this.storage.put(key, data, (err)=>{
                if(err){
                    reject('error write');
                }
                else{
                    resolve(key);
                }
            });
        });
    }
    /**
     * @async
     * @param  {} filePath
     */
    async readFile(filePath){
        let item = await this.getItem(filePath);
        return item[filePath];
    }
    /**
     * @param  {} filePath
     * @param  {} data
     */
    async writeFile(filePath, data){
        return await this.setItem(filePath, data);
    }

    async readBuffer(filePath){
        let item = await this.getItem(filePath, true);
        return item[filePath];
    }

    async writeBuffer(filePath, data){
        return await this.setItem(filePath, data);
    }

    async fetchBuffer(url, filePath){
        let response = await Fetch.fetchData(url);
        return await this.writeBuffer(filePath, Buffer.from(response));
    }

    async fetchFile(url, filePath){
        let response = await Fetch.fetchData(url);
        return await this.writeFile(filePath, response);
    }

    async streamFile(url, filePath, processFn=null){
        throw Error('implement required');
    }
}

export default new LevelDBStorage();