import {default as fetch} from './fetch';
import {default as FileSystem} from './fs';
import {default as PNGFileMixins} from './mixinPNGFile';

export default class IO extends PNGFileMixins(FileSystem){
    constructor(logger=null){
        super(logger);
        this.logger = console;
    }   

    /**
     * @param  {} filePath
     */
    async readFile(filePath){
        this.logger.log({filePath});
        return await this.Fs.get(filePath);
    }
    /**
     * @param  {} filePath
     * @param  {} data
     */
    async writeFile(filePath, data){
        this.logger.log({filePath, dataLen: data.length});
        return await this.Fs.put(filePath, data);
    }

    async fetchFile(url){
        this.logger.log({url});
        let response = await fetch(url);
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.text();
    }

    async streamFile(url, filePath, processFn=null){
        //TODO: implement stream
        let text = await this.fetchFile(url);
        let content = processFn?processFn(text):text;
        console.log({textLen: text.length, contentLen: content.length});
        return await this.writeFile(filePath, content);
    }
}