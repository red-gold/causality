// import {default as fetch} from './fetch';
import {default as BaseStorage} from './baseStorage';
import {default as PNGFileMixins} from './PNGFileMixins';
import {Platform, Fetch} from 'causal-net.utils';
import {default as LevelDownMixins} from './levelDBStorage.mixins.node';
import {default as LevelJSMixins} from './levelDBStorage.mixins.web';

export default class LevelDBStorage extends Platform.mixWith(BaseStorage, {'node':[LevelDownMixins, PNGFileMixins],'web':[LevelJSMixins, PNGFileMixins]}){

    async getItem(key, zone='/', asBuffer=false){
        return new Promise((resolve, reject)=>{
            this.storage.get(zone + key, {asBuffer}, (err, data)=>{
                if(err){
                    reject('error write');
                }
                else{
                    resolve({[key]: data});
                }
            });
        });
    }
    
    async setItem(key, data, zone='/'){
        return new Promise((resolve, reject)=>{
            this.storage.put(zone + key, data, (err)=>{
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
    async readFile(filePath, asBuffer=false){
        return await this.getItem(filePath,'/', {asBuffer});
    }
    /**
     * @param  {} filePath
     * @param  {} data
     */
    async writeFile(filePath, data){
        return await this.setItem(filePath, data);
    }

    async fetchFile(url, filePath){
        let response = await Fetch.fetchData(url);
        return await this.writeFile(filePath, response);
    }

    async streamFile(url, filePath, processFn=null){
        throw Error('implement required');
    }
}