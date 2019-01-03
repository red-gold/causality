import {LevelDBStorage} from 'causal-net.storage';
(async ()=>{
    const I = new LevelDBStorage();
    const rres = await I.writeFile('temp','12345');
    const wres = await I.readFile('temp');
    console.log(wres);
    const url = 'https://avatars3.githubusercontent.com/u/43268620?s=200&v=4';
    const fetchres = await I.fetchFile(url, 'icon');
    console.log(fetchres);
})();
