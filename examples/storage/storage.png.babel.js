import {LevelDBStorage} from 'causal-net.storage';
(async ()=>{
    const storage = new LevelDBStorage();
    // const url = 'https://avatars3.githubusercontent.com/u/43268620?s=200&v=4';
    const url = 'https://storage.googleapis.com/learnjs-data/model-builder/mnist_images.png';
    console.log({url});
    let imageBuffer = await storage.fetchPNG(url);
    console.log({imageBuffer: imageBuffer.length});
    // const iconres = await storage.readPNGFile('icon');
})();