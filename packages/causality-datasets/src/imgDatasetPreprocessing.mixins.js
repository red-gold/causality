import { Stream } from 'causal-net.utils';
import { memDownCache } from 'causal-net.memcache';
import { Preprocessing } from 'causal-net.preprocessing';
const ImgDatasetPreprocessingMixins = (BaseImageClass)=> class extends BaseImageClass{ 
    constructor(...args){
        super(...args);
        this.memCache = memDownCache;
        this.preprocessing = new Preprocessing();
    }
    makePreprocessingStream(saveDir){
        const ImageBufferSize = this.F.getImgBufferSize(this.sampleSize);
        const LabelBufferSize = this.numClass;
        this.logger.debug({imageBufferSize: ImageBufferSize, 
                     labelBufferSize: LabelBufferSize});
        const TransformFn = (chunk, chunkEncoding, afterTransformFn) =>{
            const TransformAsync = async ()=>{
                let sampleBuffer = chunk.sample;
                let labelBuffer = chunk.label;
                this.logger.debug({sampleBuffer, labelBuffer});
                let splitedImgBuffer = await this.preprocessing.splitImageBuffer(sampleBuffer, ImageBufferSize);
                let splitedLabelBuffer = await this.preprocessing.splitImageBuffer(labelBuffer, LabelBufferSize);
                return { processedChunk: this.F.zip(splitedImgBuffer, splitedLabelBuffer), 
                         chunkIdx: chunk.idx};
            };
            TransformAsync(chunk).then(processedChunk=>{
                afterTransformFn(null, processedChunk);
            });
        };
        
        const WriteFn = (processedChunk, chunkEncoding, callback) =>{
            
            const WriteAsync = async (processedChunk)=>{
                let generator = this.F.generatorWithIndex(processedChunk.processedChunk);
                let chunkIdx  = processedChunk.chunkIdx;
                let samplePath  = [], labelPath = [];
                for(let [idx, [sample, label]] of generator){
                    let chunkSamplePath = await this.preProcessingStorage
                            .setItem(saveDir + 'sample/' + chunkIdx + '/' + idx + '/', sample);    
                    let chunkLabelPath = await this.preProcessingStorage
                            .setItem(saveDir + 'label/' + chunkIdx + '/' + idx + '/', label);
                    samplePath = [...samplePath, chunkSamplePath];
                    labelPath = [...labelPath, chunkLabelPath];
                    this.progress({preprocessing: [chunkSamplePath, chunkLabelPath]});
                }
                return this.F.zip(samplePath, labelPath);
            };
            
            WriteAsync(processedChunk).then((result)=>{
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

    async preprocessingDataset(saveDir='/preprocessing/mnist/',storeInMemory=false){
        this.preProcessingStorage = (storeInMemory)?this.memCache:this.storage;
        let stream = this.makePreprocessingStream(saveDir);
        let generator = this.F.generatorWithIndex(this.savedChunks);
        for(let [idx, [samplePath, labelPath]] of generator){
            let sampleItem = await this.storage.getItem(samplePath, true);
            let labelItem = await this.storage.getItem(labelPath, true);
            let sample = sampleItem[samplePath];
            let label = labelItem[labelPath];
            this.logger.debug({sample, label});
            stream.push({idx, sample, label});
        }
        stream.push(null);
        return new Promise((resolve, reject)=>{
            stream.on('finish', ()=>{
                resolve(this.savedPreprocessing);
            });
        });
    }
};
export default ImgDatasetPreprocessingMixins;