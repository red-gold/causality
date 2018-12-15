import {default as Function} from './function';
import {IO} from 'causal-net-utils';
const MnistConfigure = {
    ImgFileName: 'mnist_images.png',
    LabelFileName: 'mnist_labels_uint8',
    Link: 'https://storage.googleapis.com/learnjs-data/model-builder/',
    ImgUrl: 'https://storage.googleapis.com/learnjs-data/model-builder/mnist_images.png',
    LabelUrl: 'https://storage.googleapis.com/learnjs-data/model-builder/mnist_labels_uint8',
    SaveDir: './tmp_datasets/'
};

export default class MnistDataset {
    
    constructor(configure=MnistConfigure){
        this.ImgW = 28;
        this.ImgH = 28;
        
        this.NUM_DATASET_ELEMENTS = 65000;
        this.SampleSize = [28, 28, 4];
        this.DataSize = [65000, ...this.SampleSize];
        this.NumClasses = 10;
        
        this.configure = MnistConfigure;
        this.f = new Function();
        this.io = new IO();
    }

    fetchDataset(saveDir=null){
        if(saveDir){
            this.saveDir = saveDir;
        }
        let labelUrl = this.configure.labelUrl;
        let imgUrl = this.configure.imgUrl;
        let dataFetch = new FetchStream(imgUrl).pipe(fs.createWriteStream(this.saveDir +'/'+ this.MNIST_IMAGE));
        let labelFetch = new FetchStream(labelUrl).pipe(fs.createWriteStream(this.saveDir +'/'+this.MNIST_LABEL));
        return Promise.all([dataFetch, labelFetch]);
    }

    loadDataSync(){
        const SaveImgPath = this.configure.SaveDir + this.configure.ImgFileName;
        return this.io.PNGReadSync(SaveImgPath);
        
    }

    loadLabelSync(){
        const SaveLabelPath = this.configure.SaveDir + this.configure.LabelFileName;
        return new Uint8Array(this.io.readSync(SaveLabelPath));
    }    
    
    loadDatasetSync(memcache){
        const f = this.f;
        this.memcache = memcache;
        const dataBuffer = this.loadDataSync();
        const labelBuffer = this.loadLabelSync();
        console.log({len: dataBuffer.length, labelLen: labelBuffer.length});
        const data = f.splitBuffer(dataBuffer, 28*28*4);
        console.log({lenData: data.length});
        const encodedLabels = f.splitBuffer(labelBuffer, 10);
        console.log({lenLabel: encodedLabels.length});
        const datum = f.zip(data, encodedLabels);
        
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
        const f = this.f;
        const [trainSet, testSet] = f.makeTrainTestSet(this.sampleId, trainSize);
        return [trainSet, testSet];
    }

    getSampleGenerator(trainIdxSet, batchSize=10, start=0, end=null){
        const memcache = this.memcache;
        const f = this.f;
        const batches = f.splitBuffer(trainIdxSet, batchSize);
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
