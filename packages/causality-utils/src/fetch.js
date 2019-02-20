import fetch  from 'cross-fetch';
import {default as Stream} from './stream';
import {default as Platform} from './platform';
import fetchStream from 'fetch-readablestream';

const NodeStreamMixins = (FetchClass)=> class extends FetchClass{ 
    static async streamData(url){
        const response = await fetch(url);
        if (response.status >= 400) {
            throw Error("Bad response from server");
        }
        return response.body;
    }
};

const WebStreamMixins = (FetchClass)=> class extends FetchClass{ 
    static async streamData(url){
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

class Fetch extends Platform.mixWith(fetch, {'node': [NodeStreamMixins], 'web':[WebStreamMixins]}){
    constructor(){}
    async fetchData(url){
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

    async fetchJson(url){
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

