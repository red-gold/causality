import {default as BaseProcessing} from './basePreprocessing';
import {default as Function} from './function';
import {default as PreprocessingImageMixins} from './preprocessingImage.mixins';
import {default as PreprocessingNLPMixins} from './preprocessingNLP.mixins';
import {default as PreprocessingTabularMixins} from './preprocessingTabular.mixins';
import {Platform} from 'causal-net.utils';
export default class Preprocessing extends Platform.mixWith(BaseProcessing, 
        [PreprocessingImageMixins, 
         PreprocessingNLPMixins, 
         PreprocessingTabularMixins]){
    constructor(){
        this.F = new Function();
    }
}