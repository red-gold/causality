import { Sampling } from 'causal-net.utils';
const ImageDatasetGeneratorMixins = (BaseImageClass)=> class extends BaseImageClass{ 
    
    getTrainTestSet(trainSize=null){
        trainSize = trainSize||parseInt(this.savedPreprocessing.length*0.9);
        const [trainSet, testSet] = this.F.splitTrainTestSet(this.savedPreprocessing, trainSize);
        return [trainSet, testSet];
    }

    makeSampleGenerator(sampleIdxSet, batchSize=null, start=0, end=null){
        if(!this.savedPreprocessing){
            throw Error('preprocessing must be performed');
        }
        batchSize = batchSize?batchSize:sampleIdxSet.length;
        const _batches = this.F.hsplitEvery(sampleIdxSet, batchSize);
        const batches = Sampling.choice(_batches, _batches.length);
        if(end === null){
            end = batches.length;
        }
        let nextIndex = start, iterationCount = 0, step = 1;
        const batchGenerator = {
                next: async()=>{
                    let batchSamples = [], batchLabels = [];
                    for(let [samplePath, labelPath] of batches[nextIndex]){
                        let sampleItem = await this.preProcessingStorage.getItem(samplePath,true);
                        let labelItem = await this.preProcessingStorage.getItem(labelPath,true);
                        batchSamples = [...batchSamples, sampleItem[samplePath]];
                        batchLabels = [...batchLabels, labelItem[labelPath]];
                    }
                    nextIndex += step;
                    let idx = iterationCount;
                    iterationCount++;
                    return {idx, batchSize, data:[batchSamples, batchLabels]};
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
export default ImageDatasetGeneratorMixins;