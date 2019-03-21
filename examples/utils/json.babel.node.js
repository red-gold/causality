import { jsonUtils } from 'causal-net.utils';
(async ()=>{
    let data = await jsonUtils.readJSON('./test.json');
    console.log(data);
    jsonUtils.writeJSON(data, './out.json');
})();