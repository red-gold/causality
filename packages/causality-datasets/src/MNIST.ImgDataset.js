import {default as BaseImgDataset} from './baseImgDataset';
import {default as Function } from './function';
import { LevelDBStorage } from 'causal-net.storage';
import { Preprocessing } from '../../causality-preprocessing/src';
const MnistConfigure = {
    ImgFileName: 'mnist_images.png',
    LabelFileName: 'mnist_labels_uint8',
    Link: 'https://storage.googleapis.com/learnjs-data/model-builder/',
    ImgUrl: 'https://storage.googleapis.com/learnjs-data/model-builder/mnist_images.png',
    LabelUrl: 'https://storage.googleapis.com/learnjs-data/model-builder/mnist_labels_uint8',
    SaveDir: '/mnistData/',
    dataSize: [65000, 28, 28, 4],
    numClass: 10
};

export default class MnistDataset extends BaseImgDataset{
    
    constructor(){
        super(MnistConfigure.dataSize, MnistConfigure.numClass);
        this.configure = MnistConfigure;
        this.storage = new LevelDBStorage();
        this.preprocessing = new Preprocessing();
        this.F = new Function();
    }

    async fetchDataset(saveDir=null){
        if(this.saveDir){
            throw Error('data is not fetch');
        }
        this.saveDir = saveDir || this.configure.SaveDir;
        const ImgUrl = this.configure.ImgUrl,
              LabelUrl = this.configure.LabelUrl;
        this.saveDataPath  = this.saveDir + this.configure.ImgFileName, 
        this.saveLabelPath = this.saveDir + this.configure.LabelFileName;
        console.log(this.saveDataPath);
        let dataFetch = await this.storage.fetchPNGFile(ImgUrl, this.saveDataPath);
        let labelFetch = await this.storage.fetchFile(LabelUrl, this.saveLabelPath);
        return [dataFetch, labelFetch];
    }

    
    async loadData(){
        if(!this.saveDataPath){
            throw Error('data is not fetch');
        }
        return await this.storage.readPNGFile(this.saveDataPath);    
    }
    
    
    async loadLabel(){
        if(!this.saveLabelPath){
            throw Error('label is not fetch');
        }
        let labelBuffer = await this.storage.readPNGFile(this.saveLabelPath);
        return new Uint8Array(labelBuffer);
    }
    
    async loadDataset(){
        let dataBuffer  = await this.loadData();
        let labelBuffer = await this.loadLabel();
        return [dataBuffer, labelBuffer];
    }
    
    async preprocessingDataset(storeInMemory=false){
        
        let storage = (storeInMemory)?this.memeCache:this.storage;
        let dataset = await this.loadDataset();
        let [dataBuffer, labelBuffer] = dataset;
        let imageBufferSize = this.F.getImgBufferSize(this.imgSize);
        let labelBufferSize = this.numClass;
        let splitedImgBuffer = await this.preprocessing.splitImageBuffer(dataBuffer, imageBufferSize);
        let splitedLabelBuffer = await this.preprocessing.splitImageBuffer(labelBuffer, labelBufferSize);
        console.log({imageBufferSize:splitedImgBuffer.length, labelBufferSize: splitedLabelBuffer.length});
        const datum  = this.F.zip(splitedImgBuffer, splitedLabelBuffer);
        const generator = this.F.generatorWithIndex(datum);
        this.sampleIds = [];
        for(let [idx, item] of generator){
            this.storage.setItem(idx, item[0], 'data/');
            this.storage.setItem(idx, item[1], 'label/');
            this.sampleIds.push(idx);
        }
        console.log({lenIdx: this.sampleIds.length});
        return this.sampleId;
    }
    
    loadDatasetSync(){
        const F = this.F;
        this.memcache = memcache;
        const dataBuffer = this.loadDataSync();
        const labelBuffer = this.loadLabelSync();
        console.log({len: dataBuffer.length, labelLen: labelBuffer.length});
        const data = F.splitBuffer(dataBuffer, 28*28*4);
        console.log({lenData: data.length});
        const encodedLabels = F.splitBuffer(labelBuffer, 10);
        console.log({lenLabel: encodedLabels.length});
        
        
        
        this.sampleId = [];
        for(let [idx, item] of generator){
            this.memcache.setItem(idx, item[0], 'data/');
            this.memcache.setItem(idx, item[1], 'label/');
            this.sampleId.push(idx);
        }
        console.log({lenIdx: this.sampleId.length});
        return this.sampleId;
    }

    getTrainTestSet(trainSize=60000){
        const F = this.F;
        const [trainSet, testSet] = F.makeTrainTestSet(this.sampleId, trainSize);
        return [trainSet, testSet];
    }

    makeSampleGenerator(trainIdxSet, batchSize=10, start=0, end=null){
        const memcache = this.memcache;
        const F = this.F;
        const batches = F.splitBuffer(trainIdxSet, batchSize);
        if(end === null){
            end = batches.length;
        }
        
        let nextIndex = start, iterationCount = 0, step = 1;
        const batchGenerator = {
            *[Symbol.iterator]() {
                let result;
                while(nextIndex < end){
                    result = [memcache.getItemBatch(batches[nextIndex], 'data/'), 
                              memcache.getItemBatch(batches[nextIndex], 'label/')];
                    nextIndex += step;
                    iterationCount++;
                    yield result;
                }
            }
        };
        return batchGenerator;
    }
};
