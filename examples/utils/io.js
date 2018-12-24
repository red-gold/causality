const {Pipe, IO} = require('causal-net-utils');
const I = new IO();
let url = 'https://avatars3.githubusercontent.com/u/43268620?s=200&v=4';
// I.fetchFile(url)
//     .then((content)=>{
//         console.log({content});
//     });
I.fetchPNGFile(url)
    .then((content)=>{
        console.log({content});
    })
    .catch(err=>{
        console.error(err);
    });


