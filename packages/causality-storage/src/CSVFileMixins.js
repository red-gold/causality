import {Fetch, CSV } from 'causal-net.utils';

const CSVFileMixins = (StorageClass)=> class extends StorageClass{
 
    async readCSVFile(filePath){
        return await this.readFile(filePath);
    }
    /**
     * @param  {} filePath
     * @param  {} data
     */
    async writeCSVFile(filePath, parsedData){
        return await this.writeFile(filePath, parsedData);
    }

    async fetchCSV(url){
        return new Promise(async (resolve, reject)=>{
            let reader = await Fetch.streamData(url);
            let data = [];
            let csv = new CSV();
            csv.on('end', ()=>{
                resolve(data);
            });
            csv.on('data',(row)=>{
                data.push(row);
            });
            reader.pipe(csv);
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
export default CSVFileMixins;
    