const {Pipe, IO, Log} = require('causal-net-utils');
const I = new IO();
let url = 'https://avatars3.githubusercontent.com/u/43268620?s=200&v=4';
const asyncTest = async ()=>{
    let stm = await I.streamFile(url,'avatar');
    let content = await I.readFile('avatar');
    console.log({len: content.length});
}
asyncTest();