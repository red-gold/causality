const {Storage} = require('causalNet/storage');
(async ()=>{
    const I = new Storage();
    const rres = await I.writeFile('temp','12345');
    const wres = await I.readFile('temp');
    console.log(wres);
})();
