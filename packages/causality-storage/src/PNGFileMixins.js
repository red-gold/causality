import {Platform, Fetch} from 'causal-net.utils';

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

    async fetchPNGFile(url, filePath){
        return await this.fetchFile(url, filePath);
    }

    async streamPNGFile(url, filePath, processFn=null){
        //TODO: implement stream
    }
};
export default PNGFileMixins;
    