import {default as fetch} from './fetch';
import {default as  fs} from './fs';
import ats from 'async-to-sync';
import * as process from 'process';
import { PNG } from 'pngjs3/browser';

export default class IO{
    constructor(logger=null){
        // this.logger = logger.from(logger);
        this.logger = console;
    }   

    get CoreFs(){
        return fs;
    }
    
    PIDExport(){
        if(process && process.pid) {
            this.logger.log('This process is your pid ' + process.pid);
            fs.writeFileSync('./process.pid', process.pid);
        }
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

    readFile(filePath){
        this.logger.log({filePath});
        return fs.get(filePath);
    }
    
    readFileSync(filePath){
        return ats(this.readFile)(filePath);
    }

    writeFile(filePath, data){
        return ats(fs.put)(filePath, data);
    }
    /**
     * @param  {} filePath
     * @param  {} data
     * 
     */
    writeFileSync(filePath, data){
        return ats(this.writeFile)(filePath, data);
    }
    /**
     * @param  {} url
     * @param  {} convertFn=(content)=>content
     */
    async fetchFile(url, convertFn=(content)=>content){
        this.logger.log({url});
        return await fetch(url).then(response=>{
            if(response.status >= 400){
                throw Error('bad response');
            }
            return response.arrayBuffer().then(text=>convertFn(text));
        });
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

    fetchToFile(url, filePath){
        this.logger.log({url, filePath});
        const out = fs.createWriteStream(filePath);
        return new fetch(url).pipe(out);
    }
}