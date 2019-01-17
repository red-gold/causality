import fetch  from 'cross-fetch';
import {default as Stream} from './stream';
import {default as Platform} from './platform';

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
        let response = await window.fetch(url);
        console.log({fetch:url});
        if (response.status >= 400) {
            console.error(response.status);
            reject("Bad response from server");
        }
        const streamReader = response.body.getReader();
        let reader = Stream.makeReadable();
        let { value, done } = await streamReader.read();
        if (done) {
            reader.push(null);
        }
        else{
            reader.push(value);
        }
        return reader;
    }
};

export default class Fetch extends Platform.mixWith(fetch, {'node': [NodeStreamMixins], 'web':[WebStreamMixins]}){
    constructor(){}
    static async fetchData(url){
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

    static async fetchJson(url){
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

