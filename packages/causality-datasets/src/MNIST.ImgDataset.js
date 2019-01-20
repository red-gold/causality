import { default as BaseImgDataset } from './baseImgDataset';
import { default as Function } from './function';
import { indexDBStorage } from 'causal-net.storage';
import { memDownCache } from 'causal-net.memcache';
import { Preprocessing } from 'causal-net.preprocessing';
import { Stream, Sampling } from 'causal-net.utils';

export default class MnistDataset extends BaseImgDataset{
    
    constructor(configure){
        super(configure);
        this.storage = indexDBStorage;
        this.memCache = memDownCache;
        this.preprocessing = new Preprocessing();
        this.F = new Function();
    }

    async fetchLabelChunk(chunkUrl, savePath){
        console.log({chunkUrl, savePath});
        return await this.storage.fetchFile(chunkUrl, savePath);
    }

    async fetchSampleChunk(chunkUrl, savePath){
        return await this.storage.fetchPNGFile(chunkUrl, savePath);
    }

    selectFetchedChunks(numchunks, selectBy='random'){
        let chunkIdxs = Sampling.choice(this.configuration.chunkList, numchunks);
        return chunkIdxs.map((idx, ith)=>{
                        return [`data-chunk-${idx}.png`,`label-chunk-${idx}`];
                    });
    }

    async fetchDataset(saveDir='/mnist/',numchunks=1, selectBy='random'){
        let selectedChunks = this.selectFetchedChunks(numchunks, selectBy);
        let [sampleChunks, labelChunks] = this.F.unzip(selectedChunks);
        console.log({selectedChunks, sampleChunks, labelChunks});
        let chunkFetchList = this.F.zip(sampleChunks, labelChunks);
        this.savedChunks = [];
        for(let [sampleChunk, labelChunk] of chunkFetchList){
            let sampleChunkUrl = this.configuration.datasetUrl + sampleChunk;
            let sammpleSavePath = saveDir + sampleChunk;
            console.log({sampleChunkUrl, sammpleSavePath});
            let samplePath = await this.storage.fetchPNGFile(sampleChunkUrl, sammpleSavePath);
            let labelChunkUrl = this.configuration.datasetUrl + labelChunk;
            let labelSavePath = saveDir + labelChunk;
            console.log({labelChunkUrl, labelSavePath});
            let labelPath = await this.storage.fetchFile(labelChunkUrl, labelSavePath);
            console.log({labelPath});
            this.savedChunks.push([samplePath, labelPath]);
        };
        let [sampleStorage, labelStorage] = this.F.unzip(this.savedChunks);
        this.savedChunkSamples = sampleStorage;
        this.savedChunkLabels = labelStorage;
        return {sampleStorage, labelStorage};
    }
    
    makePreprocessingStream(saveDir='/preprocessing/mnist/',storeInMemory=false){
        this.preProcessingStorage = (storeInMemory)?this.memCache:this.storage;
        
        const ImageBufferSize = this.F.getImgBufferSize(this.sampleSize);
        const LabelBufferSize = this.numClass;
        console.log({imageBufferSize: ImageBufferSize, 
                     labelBufferSize: LabelBufferSize});
        const TransformFn = (chunk, chunkEncoding, afterTransformFn) =>{
            const TransformAsync = async ()=>{
                let sampleBuffer = chunk.sample;
                let labelBuffer = chunk.label;
                console.log({sampleBuffer, labelBuffer});
                let splitedImgBuffer = await this.preprocessing.splitImageBuffer(sampleBuffer, ImageBufferSize);
                let splitedLabelBuffer = await this.preprocessing.splitImageBuffer(labelBuffer, LabelBufferSize);
                
                return {transformedData: this.F.zip(splitedImgBuffer, splitedLabelBuffer), chunkIdx: chunk.idx};
            };
            TransformAsync(chunk).then(transformedChunk=>{
                afterTransformFn(null, transformedChunk);
            });
        };
        
        const WriteFn = (transformedChunk, chunkEncoding, callback) =>{
            
            const WriteAsync = async (transformedChunk)=>{
                let generator = this.F.generatorWithIndex(transformedChunk.transformedData);
                let chunkIdx  = transformedChunk.chunkIdx;
                let samplePath  = [], labelPath = [];
                for(let [idx, [sample, label]] of generator){
                    
                    let chunkSamplePath = await this.preProcessingStorage
                            .setItem(saveDir + 'data/' + chunkIdx + '/' + idx + '/', sample);    
                    let chunkLabelPath = await this.preProcessingStorage
                            .setItem(saveDir + 'label/' + chunkIdx + '/' + idx + '/', label);
                    samplePath = [...samplePath, chunkSamplePath];
                    labelPath = [...labelPath, chunkLabelPath];
                }
                return this.F.zip(samplePath, labelPath);
            };
            
            WriteAsync(transformedChunk).then((result)=>{
                if(this.savedPreprocessing){
                    this.savedPreprocessing = [...this.savedPreprocessing, ...result];
                }
                else{
                    this.savedPreprocessing = result;
                }
                callback();
            });
        };
        let duplexer = Stream.makeDuplex(WriteFn);
        let transformer = Stream.makeTransform(TransformFn);
        let stream = duplexer.pipe(transformer).pipe(duplexer);
        return stream;
    }

    async preprocessingDataset(stream){
        console.log(this.savedChunks);
        let generator = this.F.generatorWithIndex(this.savedChunks);
        for(let [idx, [samplePath, labelPath]] of generator){
            let sampleItem = await this.storage.getItem(samplePath, true);
            let labelItem = await this.storage.getItem(labelPath, true);
            let sample = sampleItem[samplePath];
            let label = labelItem[labelPath];
            console.log({sample, label});
            stream.push({idx, sample, label});
        }
        stream.push(null);
        return new Promise((resolve, reject)=>{
            stream.on('finish', ()=>{
                resolve(this.savedPreprocessing);
            });
        });
    }
    
    getTrainTestSet(trainSize=null){
        trainSize = trainSize||parseInt(this.savedPreprocessing.length*0.9);

        const [trainSet, testSet] = this.F.splitTrainTestSet(this.savedPreprocessing, trainSize);
        return [trainSet, testSet];
    }

    makeSampleGenerator(sampleIdxSet, batchSize=null, start=0, end=null){
        
        batchSize = batchSize?batchSize:sampleIdxSet.length;
        const _batches = this.F.hsplitEvery(sampleIdxSet, batchSize);
        const batches = Sampling.choice(_batches, _batches.length);
        if(end === null){
            end = batches.length;
        }
        let nextIndex = start, iterationCount = 0, step = 1;
        console.log({batches: batches[0].length});
        const batchGenerator = {
                storage: this.preProcessingStorage,
                next: async()=>{
                    let batchSamples = [], batchLabels = [];
                    console.log({bl: batches[nextIndex], nextIndex});
                    for(let [samplePath, labelPath] of batches[nextIndex]){
                        let sampleItem = await this.storage.getItem(samplePath,true);
                        let labelItem = await this.storage.getItem(labelPath,true);
                        batchSamples = [...batchSamples, sampleItem[samplePath]];
                        batchLabels = [...batchLabels, labelItem[labelPath]];
                    }
                    nextIndex += step;
                    iterationCount++;
                    return [batchSamples, batchLabels];
                },
                *[Symbol.iterator]() {
                    while(nextIndex < end){
                        yield this.next();
                    }
                }
            };
        return batchGenerator;
    }
};
