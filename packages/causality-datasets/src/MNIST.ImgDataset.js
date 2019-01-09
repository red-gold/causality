import {default as BaseImgDataset} from './baseImgDataset';
import { LevelDBStorage } from 'causal-net.storage';
import { Preprocessing } from 'causal-net.preprocessing';
import { Stream } from 'causal-net.utils';
import { Transform } from 'stream';

export default class MnistDataset extends BaseImgDataset{
    
    constructor(configure){
        super(configure);
        this.storage = new LevelDBStorage();
        this.preprocessing = new Preprocessing();
    }

    async fetchLabelChunk(chunkUrl, savePath){
        return await this.storage.fetchBuffer(chunkUrl, savePath);
    }

    async fetchDataChunk(chunkUrl, savePath){
        return await this.storage.fetchPNGFile(chunkUrl, savePath);
    }

    async fetchDataset(saveDir='/mnist/',numchunks=1, selectBy='random'){
        let dataChunks = ['data-chunk-0.png'];
        let labelChunks = ['label-chunk-0'];
        const FetchDataChunk = async (chunkName)=>{
            const ChunkUrl = this.configuration.datasetUrl + chunkName;
            const SavePath = saveDir + chunkName;
            console.log({ChunkUrl, SavePath});
            return await this.fetchDataChunk(ChunkUrl, SavePath);
        };
        const FetchLabelChunk = async (chunkName)=>{
            let chunkUrl = this.configuration.datasetUrl + chunkName;
            let savePath = saveDir + chunkName;
            console.log({chunkUrl, savePath});
            return await this.fetchLabelChunk(chunkUrl, savePath);
        };
        let chunkFetchList = this.F.zip(dataChunks, labelChunks);
        this.savedChunks = await Promise.all(
                    chunkFetchList.map(
                        async ([dataChunk, labelChunk])=>{
                            let dataPath  = await FetchDataChunk(dataChunk);
                            let labelPath = await FetchLabelChunk(labelChunk);
                            return [dataPath, labelPath];
                        })
                    );
        let [dataStorage, labelStorage] = this.F.unzip(this.savedChunks);
        this.savedChunkData = dataStorage;
        this.savedChunkLabel = labelStorage;
        return {dataStorage, labelStorage};
    }

    preprocessingTransform(){

    }
    
    makePreprocessingStream(saveDir='/preprocessing/mnist/',storeInMemory=false){
        this.preProcessingStorage = (storeInMemory)?this.memeCache:this.storage;
        
        const ImageBufferSize = this.F.getImgBufferSize(this.sampleSize);
        const LabelBufferSize = this.numClass;
        console.log({imageBufferSize: ImageBufferSize, 
                     labelBufferSize: LabelBufferSize});
        const TransformFn = (chunk, chunkEncoding, afterTransformFn) =>{
            const TransformAsync = async ()=>{
                let dataBuffer = chunk.data;
                let labelBuffer = chunk.label;
                console.log({dataBuffer, labelBuffer});
                let splitedImgBuffer = await this.preprocessing.splitImageBuffer(dataBuffer, ImageBufferSize);
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
                let dataPath  = [], labelPath = [];
                for(let [idx, [data, label]] of generator){
                    console.log({label});
                    let preprocessingDataPath  = saveDir + 'data/' + chunkIdx + '/' + idx + '/';
                    let preprocessingLabelPath = saveDir + 'label/' + chunkIdx + '/' + idx + '/';
                    await this.preProcessingStorage.setItem(preprocessingDataPath, data);    
                    await this.preProcessingStorage.setItem(preprocessingLabelPath, label);
                    dataPath = [...dataPath, preprocessingDataPath];
                    labelPath = [...labelPath, preprocessingLabelPath];
                }
                return this.F.zip(dataPath, labelPath);
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
        for(let [idx, [dataPath, labelPath]] of generator){
            let dataItem = await this.storage.readFile(dataPath, true);
            let labelItem = await this.storage.readFile(labelPath, true);
            let data = dataItem[dataPath];
            let label = labelItem[labelPath];
            console.log({data, label});
            stream.push({idx, data, label});
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

    makeTrainSampleGenerator(trainSet, batchSize=10, start=0, end=null){
        const batches = this.F.hsplitEvery(trainSet, batchSize);
        if(end === null){
            end = batches.length;
        }
        let nextIndex = start, iterationCount = 0, step = 1;
        console.log({batches: batches[0].length});
        const batchGenerator = {
                storage: this.preProcessingStorage,
                next: async()=>{
                    let [dataPaths, labelPaths] = batches[nextIndex];                      
                    let batchSamples = await Promise.all( dataPaths.map(async (bidx)=>{
                                    console.log({bidx});
                                    let item = await this.storage.getItem(bidx,true);
                                    return item[bidx];
                                }) ); 
                    let batchlabels = await Promise.all( labelPaths.map(async (bidx)=>{
                                    console.log({bidx});
                                    let item = await this.storage.getItem(bidx,true);
                                    return item[bidx];
                                }) );
                    nextIndex += step;
                    iterationCount++;
                    return [batchSamples, batchlabels];
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
