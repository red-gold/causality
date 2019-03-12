import {Fetch, Stream, PNG} from 'causal-net.utils';
let link = 'https://avatars3.githubusercontent.com/u/43268620?s=200&v=4';
Fetch.fetchData(link)
.then((content)=>{
    console.log({'content length': content.length});
});
Fetch.streamData(link).then(_reader=>{
    let reader = Stream.wrapReadable(_reader);
    reader.pipe(new PNG()).on('parsed', function(){
        console.log({'content length': this.data.length});
    });
});

