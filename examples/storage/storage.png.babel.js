import {IndexDBStorage} from 'causal-net.storage';
(async ()=>{
    const url = 'https://avatars3.githubusercontent.com/u/43268620?s=200&v=4';
    console.log({url});
    let imageBuffer = await IndexDBStorage.fetchPNG(url);
    console.log({imageBuffer: imageBuffer.length});
    // const iconres = await storage.readPNGFile('icon');
})();