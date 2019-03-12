import { Function as BaseFunction } from 'causal-net.core';
import { Platform } from 'causal-net.utils';
import { ColorTransformingMixins, ImageSplittingMixins } from './Image/index';
class ImagePreprocessing extends Platform.mixWith(BaseFunction, [
        ColorTransformingMixins, ImageSplittingMixins
    ]){
    constructor(){
        super();
    }
}

export default new ImagePreprocessing;