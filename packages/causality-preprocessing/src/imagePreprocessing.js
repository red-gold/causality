import { Functor as BaseFunctor } from 'causal-net.core';
import { platform } from 'causal-net.utils';
import { ColorTransformingMixins, ImageSplittingMixins } from './Image/index';

/**
 * This ImagePreprocessing provide methods for preprocessing image data
 * { MixWith: [
 *         ColorTransformingMixins, ImageSplittingMixins
 *     ] }
 * @class ImagePreprocessing
 * @extends BaseFunctor
 * @example
 * [EXAMPLE ../examples/imagePreprocessing.babel.node.js]
 */
class ImagePreprocessing extends platform.mixWith(BaseFunctor, [
        ColorTransformingMixins, 
        ImageSplittingMixins ]){
    constructor(){
        super();
    }
}

export default new ImagePreprocessing;