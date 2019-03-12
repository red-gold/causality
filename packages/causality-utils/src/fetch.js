import fetch from 'cross-fetch';
import { default as Platform } from './platform';
import { default as NodeStreamMixins } from './fetchStreamMixins.node';
import { default as WebStreamMixins } from './fetchStreamMixins.web';

class BaseFetch{
    constructor(){
        this.fetch = fetch;
    }
}

/**
 * This isomorphic Fetch class is mixed with:
 * - NodeStreamMixins  
 * - WebStreamMixins
 * @class Fetch
 * @extends BaseFetch
 */
class Fetch extends Platform.mixWith(BaseFetch, {'node': [NodeStreamMixins], 'web':[WebStreamMixins]}){
    constructor(){
        super();
    }
    /**
     * fetch text content given the url
     * @param { String } url
     * @returns { Promise } promise of content
     */
    fetchData(url){
        return new Promise((resolve, reject)=>{
            fetch(url).then(response=>{
                if (response.status >= 400) {
                    console.error(response.status);
                    reject("Bad response from server");
                }
                resolve(response.text());
            });
        });
    }
    /**
     * fetch json content given the url 
     * @param { String } url
     * @returns { promise } promise of content
     */
    fetchJson(url){
        return new Promise(async (resolve, reject)=>{
            fetch(url).then(response=>{
                if (response.status >= 400) {
                    console.error(response.status);
                    reject("Bad response from server");
                }
                resolve(response.json());
            });
        });
    }
}

export default new Fetch();