const {Pipe, IO, Log} = require('causal-net-utils');
const I = new IO();
let url = 'https://avatars3.githubusercontent.com/u/43268620?s=200&v=4';
// url = 'https://cdn.pixabay.com/photo/2017/02/24/00/13/png-2093542_960_720.png';
const asyncTest = async ()=>{
    let stm = await I.streamPNGFile(url,'avatar');
    let content = await I.readFile('avatar');
    let pngData = await I.readPNGFile('avatar');
    console.log({strLen: content.length, 'pngLen': pngData.length});
}
asyncTest();