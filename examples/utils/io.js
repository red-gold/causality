const {Pipe, IO, Log} = require('causal-net-utils');
const I = new IO();
const asyncTest = async ()=>{
    const rres = await I.writeFile('temp','12345');
    const wres = await I.readFile('temp');
    console.log(wres);
}
asyncTest();

