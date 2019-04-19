import { imagePreprocessing } from 'causal-net.preprocessing';
let image = Buffer.from([ 255,0,0,255, 0,0,0,255, 0,0,0,255, 0,0,0,255,
    0,0,0,255, 255,0,0,255, 0,0,0,255, 0,0,0,255,
    0,0,0,255, 0,0,0,255, 255,0,0,255, 0,0,0,255,
    0,0,0,255, 0,0,0,255, 0,0,0,255, 255,0,0,255]);
image = imagePreprocessing.imageResize(image, [4, 4], [8,6]);
pngUtils.writePNG(image, [8,6,4],'random.png');