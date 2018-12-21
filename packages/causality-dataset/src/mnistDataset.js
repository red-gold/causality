import {default as BaseDataset} from './baseDataSet';
import {default as Function} from './function';
import {IO} from 'causal-net-utils';
import ToSync from 'async-to-sync';
const MnistConfigure = {
    ImgFileName: 'mnist_images.png',
    LabelFileName: 'mnist_labels_uint8',
    Link: 'https://storage.googleapis.com/learnjs-data/model-builder/',
    ImgUrl: 'https://storage.googleapis.com/learnjs-data/model-builder/mnist_images.png',
    LabelUrl: 'https://storage.googleapis.com/learnjs-data/model-builder/mnist_labels_uint8',
    SaveDir: './tmp_datasets/'
};

export default class MnistDataset extends BaseDataset{
    
    constructor(){
        super(MnistConfigure);
        this.ImgW = 28;
        this.ImgH = 28;
        this.ImgD = 4;
        this.SampleSize = [this.ImgW, this.ImgH, this.ImgD];
        this.DataSize = [65000, ...this.SampleSize];
        this.NumClasses = 10;
        
        this.configure = MnistConfigure;
        this.F = new Function();
        this.IO = new IO();
    }

    fetchDataset(saveDir=null){
        if(!saveDir){
            saveDir = this.configure.SaveDir;
        }
        const ImgUrl = this.configure.ImgUrl,
              LabelUrl = this.configure.LabelUrl, 
              MnistImage = this.configure.ImgFileName, 
              MnistLabel = this.configure.LabelFileName;
        let dataFetch = this.IO.fetchToFile(ImgUrl, saveDir +'/'+ MnistImage);
        let labelFetch = this.IO.fetchToFile(LabelUrl, saveDir +'/'+ MnistLabel);
        return Promise.all([dataFetch, labelFetch]);
    }

    fetchDatasetSync(savedir=null){
        console.log('this fecth dataset');
        return ToSync(this.fetchDataset(savedir));
    }

    loadDataSync(){
        const SaveImgPath = this.configure.SaveDir + this.configure.ImgFileName;
        return this.IO.PNGReadSync(SaveImgPath);    
    }
    
    makeSummary(log=()=>{}){
        const summary = { ImgW: this.ImgH, ImgW: this.DataSize.ImgH, 
                          SampleSize: this.SampleSize, DataSize: this.DataSize, 
                          NumClasses: this.NumClasses, Config: this.configure };
        log(summary); 
        return summary;
    }

    loadLabelSync(){
        const SaveLabelPath = this.configure.SaveDir + this.configure.LabelFileName;
        return new Uint8Array(this.IO.readSync(SaveLabelPath));
    }
        
    
    loadDatasetSync(memcache){
        const F = this.F;
        this.memcache = memcache;
        const dataBuffer = this.loadDataSync();
        const labelBuffer = this.loadLabelSync();
        console.log({len: dataBuffer.length, labelLen: labelBuffer.length});
        const data = F.splitBuffer(dataBuffer, 28*28*4);
        console.log({lenData: data.length});
        const encodedLabels = F.splitBuffer(labelBuffer, 10);
        console.log({lenLabel: encodedLabels.length});
        const datum = F.zip(data, encodedLabels);
        
        let generator = f.generatorWithIndex(datum);
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

    getSampleGenerator(trainIdxSet, batchSize=10, start=0, end=null){
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
