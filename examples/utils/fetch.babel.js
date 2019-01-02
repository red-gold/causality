import {Fetch, Stream, PNG} from 'causal-net.utils';
let url = 'https://avatars3.githubusercontent.com/u/43268620?s=200&v=4';
Fetch.fetchData(url)
.then((content)=>{
    console.log({clen: content.length});
});
Fetch.streamData(url).then(_reader=>{
    let reader = Stream.wrapReadable(_reader);
    reader.pipe(new PNG()).on('parsed', function(){
        console.log({len: this.data.length});
    });
});

