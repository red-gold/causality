import { JSONUtils } from 'causal-net.utils';
(async ()=>{
    let data = await JSONUtils.readJSON('./test.json');
    console.log(data);
    JSONUtils.writeJSON(data, './out.json');
})();