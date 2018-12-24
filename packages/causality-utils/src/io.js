import {FetchStream, fetchUrl} from './fetch';
import {default as  fs} from './fs';
import * as process from 'process';
import {PNG} from 'pngjs';

export default class IO{
    constructor(logger=null){
        this.logger = logger;
    }   

    get CoreFs(){
        return fs;
    }
    
    PIDExport(){
        if(process.pid) {
            console.log('This process is your pid ' + process.pid);
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
        return fs.get(filePath);
    }

    writeFile(filePath, data){
        return fs.put(filePath, data);
    }

    readFileSync(filePath){
        return fs.readFileSync(filePath);
    }
    /**
     * @param  {} filePath
     * @param  {} data
     * 
     */
    writeFileSync(filePath, data){
        return fs.writeFileSync(filePath, data);
    }

    fetch(url){
        return fetchUrl(url);
    }

    fetchToFile(url, filePath){
        console.log({url, filePath});
        const out = fs.createWriteStream(filePath);
        return new FetchStream(url).pipe(out);
    }
}