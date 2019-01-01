import fetch  from 'cross-fetch';
import fetchStream from 'fetch-readablestream';

import {default as Stream} from './stream';
if(typeof window !== 'undefined'){
    var streamData = fetchStream;   
    var streamData = async (url)=>{
        let response = await fetchStream(url);
        const streamReader = response.body.getReader();
        let reader = Stream.makeReadable();
        let { value, done } = await streamReader.read();
        if (done) {
            reader.close();
        }
        else{
            reader.push(value);
        }
        return reader;
    };
}
else{
    
    var streamData = async (url) => {
        const response = await fetch(url);
        if (response.status >= 400) {
            throw Error("Bad response from server");
        }
        return response.body;
    };
}
var fetchData = async (url)=>{
    return new Promise(async (resolve, reject)=>{
        let response = await fetch(url);
        if (response.status >= 400) {
            reject("Bad response from server");
        }
        resolve(response.text());
    });
};

export {fetchData, streamData};
