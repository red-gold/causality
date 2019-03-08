import fetch  from 'cross-fetch';
import {default as Stream} from './stream';
import {default as Platform} from './platform';
import fetchStream from 'fetch-readablestream';

/**
 * mixins function for Fetch on node environment
 * @class
 * @param { Class } FetchClass
 * @returns { Class } Fetclass - class with extended methods
 */
const NodeStreamMixins = (FetchClass)=> class extends FetchClass{ 
    /**
     * @param { String } url - url for content
     * @returns { Readable } content
     * @memberof Fetch
     */
    async streamData(url){
        const response = await fetch(url);
        if (response.status >= 400) {
            throw Error("Bad response from server");
        }
        return response.body;
    }
};

/**
 * provide streamData method for web environment
 * @class
 * @param { Class } FetchClass
 * @returns { Class } FetchClass - class with extended methods
 */

const WebStreamMixins = (FetchClass)=> class extends FetchClass{ 
    /**
     * Stream content given the url
     * @param { String } url - url for content
     * @returns { Readable } content
     */
    async streamData(url){
        let response = await fetchStream(url);
        if(response.status >= 400){
            console.error(response.status);
            reject("Bad response from server");
        }
        const streamReader = response.body.getReader();
        let reader = Stream.makeReadable();
        const recusiveRead = ()=>{
            return new Promise((resolve, reject)=>{
                streamReader.read().then(({ value, done })=>{
                    if (done) {
                        reader.push(null);
                        resolve(0);
                    }
                    else{
                        reader.push(value);
                        resolve(1);
                    }
                });
            });
        };
        const ReadNext = (recusiveRead)=>{
            recusiveRead().then(hasNext=>{
                if(hasNext){
                    ReadNext(recusiveRead);
                }
            });
        };
        ReadNext(recusiveRead);
        return reader;
    }
};


class BaseFetch{
    constructor(){
        this.fetch = fetch;
    }
}

/**
 * @class Fetch
 * @extends BaseFetch
 * @mixins NodeStreamMixins
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