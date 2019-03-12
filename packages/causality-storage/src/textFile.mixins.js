import { Fetch } from 'causal-net.utils';
const TextFileMixins = (StorageClass)=> class extends StorageClass{
    
    /**
     * @async
     * @param  {} filePath
     */
    async readFile(filePath){
        let item = await this.getItem(filePath);
        return item[filePath];
    }
    /**
     * @param  {} filePath
     * @param  {} data
     */
    async writeFile(filePath, data){
        return await this.setItem(filePath, data);
    }

    async deleteFile(filePath){
        return await this.delItem(filePath);
    }

    async fetchFile(url, filePath){
        let response = await Fetch.fetchData(url);
        return await this.writeFile(filePath, response);
    }

    async streamFile(url, filePath, transformer=null){
        throw Error('implement required');
    }
};
export default TextFileMixins;