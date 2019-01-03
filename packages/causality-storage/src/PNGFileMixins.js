import {Platform, Fetch} from 'causal-net.utils';

const PNGFileMixins = (StorageClass)=> class extends StorageClass{
 
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
    