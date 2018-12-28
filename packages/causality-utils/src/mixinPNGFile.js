import { PNG } from 'pngjs3';
import {default as fetch} from './fetch';
const stream = require('stream-browserify');
const {str2ab, ab2str} = require('string-arraybuffer');

const PNGFileMixins = (FileSystemClass)=> class extends FileSystemClass{
 
    async readPNGFile(filePath){
        let strData = await this.Fs.get(filePath);
        console.log({rlen: strData.length});
        let arrayData = str2ab(strData);
        return arrayData;
    }
    /**
     * @param  {} filePath
     * @param  {} data
     */
    async writePNGFile(filePath, arrayData){
        let strData = ab2str(new Uint8Array(arrayData));
        console.log({wlen: arrayData.length});
        return await this.Fs.put(filePath, strData);
    }

    async fetchPNGFile(url, streamFn=null){
        return await new Promise(async (resolve, reject)=>{
            const response = await fetch(url);
            let streamReader = response.body;
            let pipe = stream.pipeline(streamReader, new PNG());
            pipe.on('parsed', function() {
                let procData = (streamFn)?streamFn(this.data):this.data;
                resolve(procData);
            });
        });
    }

    async streamPNGFile(url, filePath, processFn=null){
        //TODO: implement stream
        let imgData = await this.fetchPNGFile(url, processFn);
        return await this.writePNGFile(filePath, imgData);
    }
};
export default PNGFileMixins;
    