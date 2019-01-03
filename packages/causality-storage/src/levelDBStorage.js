// import {default as fetch} from './fetch';
import {default as BaseStorage} from './baseStorage';
import {default as PNGFileMixins} from './PNGFileMixins';
import {Platform, Fetch} from 'causal-net.utils';
import {default as LevelDownMixins} from './levelDBStorage.mixins.node';
import {default as LevelJSMixins} from './levelDBStorage.mixins.web';
console.log(Platform.currentPlatform());
export default class LevelDBStorage extends Platform.mixWith(BaseStorage, {'node':[LevelDownMixins, PNGFileMixins],'web':[LevelJSMixins, PNGFileMixins]}){

    /**
     * @async
     * @param  {} filePath
     */
    async readFile(filePath, asBuffer=false){
        return await this.storage.get(filePath, {asBuffer});
    }
    /**
     * @param  {} filePath
     * @param  {} data
     */
    async writeFile(filePath, data){
        return await this.storage.put(filePath, data);
    }

    async fetchFile(url, filePath){
        let response = await Fetch.fetchData(url);
        return await this.writeFile(filePath, response);
    }

    async streamFile(url, filePath, processFn=null){
        throw Error('implement require');
    }
}