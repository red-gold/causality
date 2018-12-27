const {Pipe, IO, Log} = require('causal-net-utils');
const I = new IO();
let url = 'https://avatars3.githubusercontent.com/u/43268620?s=200&v=4';
I.fetchFile(url)
    .then((content)=>{
        console.log({clen: content.length});
    });