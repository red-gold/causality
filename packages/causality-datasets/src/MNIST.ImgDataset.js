import { default as BaseImgDataset } from './baseImgDataset';
import { Platform } from 'causal-net.utils';
import { LoggerMixins } from 'causal-net.log';
import { default as Function } from './function';
import { default as ImgDatasetFetchMixins } from './imgDatasetFetch.mixins';
import { default as ImgDatasetPreprocessingMixins } from './imgDatasetPreprocessing.mixins';
import { default as ImgDatasetGeneratorMixins } from './imgDatasetGenerator.mixins';
export default class MnistDataset extends Platform.mixWith(BaseImgDataset, 
        [ ImgDatasetFetchMixins,
          ImgDatasetPreprocessingMixins,
          ImgDatasetGeneratorMixins,
          LoggerMixins ]){
    
    constructor(...args){
        super(...args);
        this.F = new Function();
    }
};
