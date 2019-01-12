import {IndexDBStorage} from 'causal-net.storage';
(async ()=>{
    console.log({IndexDBStorage});
    await IndexDBStorage.writeFile('temp','12345');
    const wres = await IndexDBStorage.readFile('temp');
    console.log(wres);
    const url = 'https://avatars3.githubusercontent.com/u/43268620?s=200&v=4';
    await IndexDBStorage.fetchFile(url, 'icon');
    const iconres = await IndexDBStorage.readFile('icon');
    console.log(iconres);
})();
