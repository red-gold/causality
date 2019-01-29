import { Function as BaseFunction } from 'causal-net.core';
import { Platform } from 'causal-net.utils';
import { ColorTransformingMixins, ImageSplittingMixins } from './Image/index';
class NLPPreprocessing extends Platform.mixWith(BaseFunction, [
        ColorTransformingMixins, ImageSplittingMixins
    ]){
    constructor(){
        super();
    }
}

export default new NLPPreprocessing;