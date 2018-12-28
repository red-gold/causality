const {Pipe, IO, Log} = require('causal-net-utils');
const I = new IO();
let url = 'https://avatars3.githubusercontent.com/u/43268620?s=200&v=4';
const asyncTest = async ()=>{
    let stm = await I.streamFile(url,'avatar');
    let content = await I.readFile('avatar');
    console.log({len: content.length});
}
var  fetch  = require('cross-fetch');
var { PNG } = require('pngjs3');
const pumpify = require('pumpify');
(async ()=>{
    console.log({url});
    const response = await fetch(url);
    let streamReader = response.body;
    let png = new PNG();
    png.on('parsed', function() {
        // let procData = (streamFn)?streamFn(this.data):this.data;
        console.log({len: this.data.length});
        resolve(this.data);
    });
    pumpify(streamReader, png, ()=>{});
    // streamReader.pipe(png);
})();