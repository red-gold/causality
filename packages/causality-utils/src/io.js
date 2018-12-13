import * as process from 'process';
import * as fs from 'fs';
import {PNG} from 'pngjs';
export default class IO{
    constructor(){
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
        console.log({len: data.length});
        var img = PNG.sync.read(data);
        return img.data;
    }
}