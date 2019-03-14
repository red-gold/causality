import { default as CSV } from 'csv-parser';
/**
 * This CSVUtils class use [csv-parser](https://www.npmjs.com/package/csv-parser)
 * for csv parsing and transform csv data from fetch.
 * @todo: verify on web environment
 * @class CSVUtils
 */
class CSVUtils{
    constructor(){
        this.csv = CSV;
        this.fs = require('fs');
    }
    /**
     * return csv parser instance
     * @readonly
     * @memberof csvUtils
     */
    get CoreCSV(){
        return this.csv;
    }
    /**
     * fetch csv content from given url
     * @todo enhance reject case
     * @param { URL } url - url for csv content
     * @returns { Promise } - data promise with data if success
     * @memberof csvUtils
     */
    fetchCSV(url){
        return new Promise(async (resolve, reject)=>{
            let reader = await fetch.streamData(url);
            let data = [];
            let csv = CSV();
            csv.on('end', ()=>{
                resolve(data);
            });
            csv.on('data',(row)=>{
                data.push(row);
            });
            reader.pipe(csv);
        });
    }

    writeCSV(data, columns, filePath){
        throw Error('implement required');
    }

    readCSV(filePath){
        const fs = this.fs, CSV = this.csv;
        if(!fs.createReadStream){
            throw Error('method is not supported');
        }
        return new Promise(async (resolve, reject)=>{
            let data = [];
            let csv = CSV();
            csv.on('end', ()=>{
                resolve(data);
            });
            csv.on('data',(row)=>{
                data.push(row);
            });
            fs.createReadStream(filePath).pipe(csv);
        });
    }
}
export default new CSVUtils();