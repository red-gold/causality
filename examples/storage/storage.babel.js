import {indexDBStorage} from 'causal-net.storage';
(async ()=>{
    console.log({indexDBStorage});
    await indexDBStorage.writeFile('/temp','12345');
    await indexDBStorage.writeFile('/temp2','12345');
    const wres = await indexDBStorage.readFile('temp');
    console.log(wres);
    let listFiles = await indexDBStorage.getFileList('/saveModel/');
    console.log(listFiles);
    const url = 'https://avatars3.githubusercontent.com/u/43268620?s=200&v=4';
    await indexDBStorage.fetchFile(url, 'icon');
    const iconres = await indexDBStorage.readFile('icon');
    console.log(iconres);
})();
