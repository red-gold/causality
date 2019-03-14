import { default as BaseImgDataset } from './baseImgDataset';
import { Platform } from 'causal-net.utils';
import { LoggerMixins } from 'causal-net.log';
import { StorageMixins, indexDBStorage } from 'causal-net.storage';
import { MemCacheMixins, memDownCache } from 'causal-net.memcache';
import { default as Function } from './function';
import { default as ImageDatasetfetchMixins } from './imageDatasetfetch.mixins';
import { default as ImageDatasetPreprocessingMixins } from './imageDatasetPreprocessing.mixins';
import { default as ImageDatasetGeneratorMixins } from './imageDatasetGenerator.mixins';
import { PreprocessingMixins, imagePreprocessing } from 'causal-net.preprocessing';

export default class MnistDataset extends Platform.mixWith(BaseImgDataset, 
        [ ImageDatasetfetchMixins,
          ImageDatasetPreprocessingMixins,
          PreprocessingMixins,
          ImageDatasetGeneratorMixins,
          MemCacheMixins,
          StorageMixins,
          LoggerMixins ]){
    
    constructor(...args){
        super(...args);
        this.F = new Function();
        this.Storage = indexDBStorage;
        this.MemCache = memDownCache;
        const PreprocessingSample = async (masterSampleBuffer, sampleSize)=>{
            return await imagePreprocessing.imageSplit(masterSampleBuffer, sampleSize);
        };
        const PreprocessingLabel = async (masterLabelBuffer, labelSize)=>{
            return await imagePreprocessing.imageSplit(masterLabelBuffer, labelSize);
        };
        this.setPreprocessingFunctions(PreprocessingSample, PreprocessingLabel);
    }
};
