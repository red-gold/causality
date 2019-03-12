import { PNGUtils } from 'causal-net.utils';
(async ()=>{
    let data = await PNGUtils.readPNG('../../datasets/icon.png');
    console.log(data.length);
    PNGUtils.writePNG(data, [200, 200, 4], './out.png');
})();
