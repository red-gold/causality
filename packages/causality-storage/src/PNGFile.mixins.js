import { PNGUtils } from 'causal-net.utils';
/**
 * This LevelJSMixins class provide mixins for handle read/write/fetch png content
 * @class PNGFileMixins
 * @extends {  BaseStorage } 
 */
const PNGFileMixins = (StorageClass)=> class extends StorageClass{
    /**
     * Read PNG pixel data given the file path
     * @param { String } filePath - full file path 
     * @returns { Promise } Array content promiser 
     */
    async readPNGFile(filePath){
        return await this.readFile(filePath, true);
    }
    /**
     * write raw pixel data as Array to file at filePath
     * @param  { String } filePath
     * @param  { Array|ArrayBuffer } imgBuffer
     * @returns { Promise } Array content promiser 
     */
    async writePNGFile(filePath, imgBuffer){
        return await this.writeFile(filePath, imgBuffer);
    }
    /**
     * Fetch PNG file, transform to get raw pixel data and save to file at the filePath
     * @param { Url } url - url for png file
     * @param { String } filePath - file name to save content
     * @returns { Promise } Array content promiser 
     */
    async fetchPNGFile(url, filePath){
        let data = await PNGUtils.fetchPNG(url);
        return await this.writePNGFile(filePath, data);
    }
};
export default PNGFileMixins;
    