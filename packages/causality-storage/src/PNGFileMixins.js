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
        console.log({imgBuffer:imgBuffer.length});
        return await this.writeFile(filePath, imgBuffer);
    }

    async fetchPNGFile(url, filePath){
        return new Promise((resolve, reject)=>{
            Fetch.streamData(url).then(_reader=>{
                let reader = Stream.wrapReadable(_reader);
                reader.pipe(new PNG()).on('parsed', function(){
                    console.log({datalen2:this.data.length});
                    this.writePNGFile(filePath, Buffer.from(this.data)).then(res=>{
                        console.log(res);
                        resolve(res);
                    }).catch(err=>{
                        console.error({err});
                        reject(err);
                    });
                });
            })
            .catch(err=>{
                console.error({err});
                reject(err);
            });
        });
    }

    async streamPNGFile(url, filePath, processFn=null){
        return new Promise(async (resolve, reject)=>{
            let _reader = await Fetch.streamData(url);
            let reader = Stream.wrapReadable(_reader);
            reader.pipe(new PNG()).on('parsed', function(){
                let data = processFn?processFn(this.data):this.data;
                this.writeFile(data, filePath).then(res=>{
                    resolve(res);
                });
            });
        });
    }
};
export default PNGFileMixins;
    