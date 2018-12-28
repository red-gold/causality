var  fetch  = require('cross-fetch');
var Rx = require('rxjs');
let url = 'https://avatars3.githubusercontent.com/u/43268620?s=200&v=4';
var { PNG } = require('pngjs3');
(async ()=>{
    console.log({url});
    Rx.Observable.fromPromise(fetch(url));
    
    // let streamReader = response.body;
    // let png = new PNG();
    // png.on('parsed', function() {
    //     // let procData = (streamFn)?streamFn(this.data):this.data;
    //     console.log({len: this.data.length});
    //     resolve(this.data);
    // });
    // pumpify(streamReader, png, ()=>{});
    // streamReader.pipe(png);
})();