import { default as json5 } from 'json5';
/**
 * This class provide wrapper for [json5](https://www.npmjs.com/package/json5)
 * for json parse/stringlify/fetch/write/read
 * @todo: verify on web environment
 * @class JsonUtils
 */
class JsonUtils{
    constructor(){
        this.json = json5;
        this.fs = require('fs');
    }
    /**
     * return json5 instance
     * @readonly
     * @memberof JsonUtils
     */
    get CoreJSON(){
        return this.json;
    }
    /**
     * Fetch json content from given url
     * @todo enhance reject case
     * @param { URL } url - url for csv content
     * @returns { Promise } - data promise with data if success
     * @memberof JsonUtils
     */
    async fetchJSON(url){
        return await Fetch.fetchJson(url);
    }

    /**
     * write json content from given content
     * @todo enhance reject case
     * @param { URL } url - url for csv content
     * @returns { Promise } - data promise with data if success
     * @memberof JsonUtils
     */
    async writeJSON(data, filePath){
        const fs = this.fs, json = this.json;
        if(!fs.writeFile){
            throw Error('method is not supported');
        }
        return new Promise(async (resolve, reject)=>{
            fs.writeFile(filePath, json.stringify(data), (err)=>{
                if(err){
                    reject(err);
                }
                else{
                    resolve(filePath);
                }
            });
        });
    }

    /**
     * Fetch json content from given url
     * @todo enhance reject case
     * @param { URL } url - url for csv content
     * @returns { Promise } - data promise with data if success
     * @memberof JsonUtils
     */
    readJSON(filePath){
        const fs = this.fs, json = this.json;
        if(!fs.readFile){
            throw Error('method is not supported');
        }
        return new Promise(async (resolve, reject)=>{
            fs.readFile(filePath, (err, data)=>{
                if(err){
                    reject(err);
                }
                else{
                    resolve(json.parse(data));
                }
            });
        });
    }
}
export default new JsonUtils();