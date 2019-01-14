import {IndexDBStorage} from 'causal-net.storage';
(async ()=>{
    // const url = 'https://avatars3.githubusercontent.com/u/43268620?s=200&v=4';
    for(let idx of [1,2,3,4]){
        const surl = `http://localhost:8080/MNIST_dataset/data-chunk-${idx}.png`;
        console.log({surl});
        let imageBuffer = await IndexDBStorage.fetchPNGFile(surl,`/mnist/data/${idx}`);
        console.log({imageBuffer: imageBuffer});
        const lurl = `http://localhost:8080/MNIST_dataset/label-chunk-${idx}`;
        console.log({lurl});
        let labelBuffer = await IndexDBStorage.fetchFile(lurl,`/mnist/label/${idx}`);
        console.log({labelBuffer: labelBuffer});
    }
})();