import { Function as BaseFunction } from 'causal-net.core';
import { Platform } from 'causal-net.utils';
import { ColorTransformingMixins, ImageSplittingMixins } from './Image/index';

/**
 * This ImagePreprocessing provide methods for preprocessing image data
 * { MixWith: [
 *         ColorTransformingMixins, ImageSplittingMixins
 *     ] }
 * @class ImagePreprocessing
 * @extends BaseFunction
 * @example
 * [EXAMPLE ../examples/imagePreprocessing.babel.node.js]
 */
class ImagePreprocessing extends Platform.mixWith(BaseFunction, [
        ColorTransformingMixins, 
        ImageSplittingMixins ]){
    constructor(){
        super();
    }
}

export default new ImagePreprocessing;