import {default as fetch} from './fetch';
import {default as fs} from './fs';
import { PNG } from 'pngjs3';

export default class IO{
    constructor(logger=null){
        this.logger = console;
    }   

    
    
    PNGWrite(buffer, imgW=10, imgH=10, fileName){
        let img = new PNG({ filterType: 4, width: imgW, height: imgH });
        img.data = buffer;
        return img.pack().pipe(fs.createWriteStream(fileName));
    }

    PNGReadSync(filePath){
        var data = fs.readFileSync(filePath);
        var img = PNG.sync.read(data);
        return img.data;
    }
    /**
     * @param  {} filePath
     */
    async readFile(filePath){
        this.logger.log({filePath});
        return await fs.get(filePath);
    }
    /**
     * @param  {} filePath
     * @param  {} data
     */
    async writeFile(filePath, data){
        return await fs.put(filePath, data);
    }
    /**
     * @param  {} url
     * @param  {} convertFn=(content)=>content
     */
    async fetchFile(url){
        this.logger.log({url});
        return await fetch(url).then(response=>{
            if(response.status >= 400){
                throw Error('bad response');
            }
            return response.arrayBuffer();
        });
    }

    async fetchFileSync(url){
        this.logger.log({url});
        return ats([this.fetchFile(url)]);
    }

    async fetchPNGFile(url){
        this.logger.log({url});
        const ConvertFn = (text)=> {
            console.log({text});
            console.log({text: text.length, base64: Buffer.from(text).toString('base64').length});
            return PNG.sync.read(text);
        };
        return await this.fetchFile(url, ConvertFn);
    }
}