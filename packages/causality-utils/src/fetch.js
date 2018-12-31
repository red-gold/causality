//TODO: enhance this code, this code is not intent for release
if(typeof window !== undefined){
    var streamData = async (url, processfn)=>{
        return new Promise((resolve, reject)=>{
        let buffer = [];
        return fetch(url).then(response => response.body)
            .then(body => {
                const reader = body.getReader();
                return new ReadableStream({
                    start(controller) {
                    return pump();
                    function pump() {
                        return reader.read().then(({ done, value }) => {
                        // When no more data needs to be consumed, close the stream
                            if (done) {
                                controller.close();
                                processFun(chunk, done);
                                resolve(processFun);
                                return;
                            }
                            console.log({value});
                            // Enqueue the next data chunk into our target stream
                            buffer.push(value);
                            controller.enqueue(value);
                            return pump();
                        });
                        }
                    }
                });
            });
        });
    };

    var fetchFile = async (url)=>{
        return new Promise((resolve, reject)=>{

        });
    };
}
else{
    var cfesh = require('cross-fetch');
    let streamReader = new PNG();
    var streamData = async (url, streamReader) => {
        return await new Promise(async (resolve, reject)=>{
            const response = await fetch(url);
            let streamReader = response.body;
            let pipe = stream.pipeline(streamReader, streamReader);
            pipe.on('parsed', function() {
                let procData = (streamFn)?streamFn(this.data):this.data;
                resolve(procData);
            });
        });
    };
    var fetchData = async (url)=>{
        return new Promise(async (resolve, reject)=>{
            let response = await fetch(url);
            if (response.status >= 400) {
                reject("Bad response from server");
            }
            resolve(response.text());
        });
    };
}
export {fetchData, streamData};
