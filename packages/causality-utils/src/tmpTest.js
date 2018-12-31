import { PNG } from 'pngjs3';
const fn = async ()=>{
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
                            resolve(Buffer.from(buffer[0]));
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
    let mypng = PNG.sync.read(data,{});
    console.log({data, mypngL: mypng.data.length});
};
fn();
export default fn;