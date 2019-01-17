import {IndexDBStorage} from 'causal-net.storage';
(async ()=>{
    const base_url = 'http://storage.googleapis.com/moderatordev-223307.appspot.com/MNIST_dataset/';
    for(let idx of [1,2,3,4]){
        console.log({idx});
        const surl = `${base_url}data-chunk-${idx}.png`;
        console.log({surl});
        let imageBuffer = await IndexDBStorage.fetchPNGFile(surl,`/mnist/data/${idx}`);
        console.log({imageBuffer: imageBuffer});
        const lurl = `${base_url}label-chunk-${idx}`;
        console.log({lurl});
        let labelBuffer = await IndexDBStorage.fetchFile(lurl,`/mnist/label/${idx}`);
        console.log({labelBuffer: labelBuffer});
    }
})().catch(err=>{
    console.error(err);
});