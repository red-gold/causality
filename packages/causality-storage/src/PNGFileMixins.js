import {Fetch, PNG, Stream} from 'causal-net.utils';

const PNGFileMixins = (StorageClass)=> class extends StorageClass{
 
    async readPNGFile(filePath){
        return await this.readFile(filePath, true);
    }
    /**
     * @param  {} filePath
     * @param  {} data
     */
    async writePNGFile(filePath, imgBuffer){
        return await this.writeFile(filePath, imgBuffer);
    }

    async fetchPNG(url){
        return new Promise(async (resolve, reject)=>{
            let _reader = await Fetch.streamData(url);
            let reader = Stream.wrapReadable(_reader);
            let png = new PNG();
            png.on('parsed', function(){
                resolve(this.data);
            });
            png.on('error',(err)=>{
                console.error(err);
                reject(err);
            });
            reader.pipe(png);
        });
    }

    async fetchPNGFile(url, filePath){
        let data = await this.fetchPNG(url);
        return await this.writePNGFile(filePath, data);
    }

    async streamPNGFile(url, filePath, transfromFn){
        throw Error('implement required');
    }
};
export default PNGFileMixins;
    