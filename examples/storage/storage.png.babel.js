import {indexDBStorage} from 'causal-net.storage';
import {Sampling,Fetch,PNG, Stream} from 'causal-net.utils';
(async ()=>{
    const base_url = 'http://storage.googleapis.com/moderatordev-223307.appspot.com/MNIST_dataset/';
    const idxs = Sampling.choice(650,1);
    console.log({idxs});
    for(let idx of idxs){
        console.log({idx});
        const surl = `${base_url}data-chunk-${idx}.png`;
        console.log({surl});
        // let readStream = await Fetch.streamData(surl);
        // const WriteFn = (chunkData, chunkEncoding, callback) =>{
        //     console.log({chunkData:chunkData.length});
        //     callback();
        // };
        // let writer = Stream.makeWritable(WriteFn);
        // readStream.pipe(writer);
        // readStream.pipe(new PNG()).on('parsed', function(){
        //     console.log({len: this.data.length});
        // });
        let imageBuffer = await indexDBStorage.fetchPNGFile(surl,`/mnist/data/${idx}`);
        console.log({imageBuffer: imageBuffer});
        const lurl = `${base_url}label-chunk-${idx}`;
        console.log({lurl});
        let labelBuffer = await indexDBStorage.fetchFile(lurl,`/mnist/label/${idx}`);
        console.log({labelBuffer: labelBuffer});
    }
})().catch(err=>{
    console.error(err);
});