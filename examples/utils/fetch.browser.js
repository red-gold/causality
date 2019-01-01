const {fetchData, streamData, Stream, PNG} = require('causal-net.utils');
(async ()=>{
    let url = 'https://avatars3.githubusercontent.com/u/43268620?s=200&v=4';
    let reader = await streamData(url);
    reader.pipe(new PNG()).on('parsed', function(){
        console.log({len: this.data.length});
    });
})();