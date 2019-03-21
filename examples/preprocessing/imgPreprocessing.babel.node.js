import { imagePreprocessing } from 'causal-net.preprocessing';
import { termLogger } from 'causal-net.log';
import { pngUtils } from "causal-net.utils";
(async ()=>{
    let data = await pngUtils.readPNG('../../datasets/icon.png');
    console.log(data.length);
    var subImages = imagePreprocessing.imageSplit(data, 200*100*4);
    var index = 0;
    console.log(subImages.length);
    for(let img of subImages){
        index += 1;
        let bwImg = imagePreprocessing.blackWhiteTransform(img, 4);
        console.log({[index]: bwImg.length});
        pngUtils.writePNG(bwImg, [200, 100, 1], `./out_${index}.png`);
    }
})();