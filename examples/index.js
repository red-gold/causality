import { PNG } from 'pngjs3/browser';
const {
    Readable,
    Writable,
    Transform,
    Duplex,
    pipeline,
    finished 
  } = require('readable-stream');
const fn = async ()=>{
    const title = document.createElement('p');
    title.html = 'this is title';
    const image = document.createElement('img');
    const url = 'https://avatars3.githubusercontent.com/u/43268620?s=200&v=4';
    console.log({url});
    // Fetch the original image
    let stream = async ()=>{
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
                            resolve(buffer);
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
    let data = await stream();
    let mypng = PNG.sync.read(data[0],{});
    console.log({data, mypngL: mypng.data.length});
    // stream.then(stream => new Response(stream))
    //     .then(response => response.blob())
    //     .then(blob => URL.createObjectURL(blob))
    //     .then(url => console.log(image.src = url))
    //     .catch(err => console.error(err));


    // const response = await fetch(url);
    // let reader = response.body;
    // var rst = new Readable();
    // rst.wrap(reader);
    
    // let png = new PNG();
    // png.on('parsed', function() {
    //     // let procData = (streamFn)?streamFn(this.data):this.data;
    //     console.log({len: this.data.length});
    //     resolve(this.data);
    // });
    // console.log({streamReaderOn: streamReader.on});
    // console.log({PNGon: png.on});
    // pump(rst, png, ()=>{});
    // streamReader.pipe(png);
};
fn();
export default fn;