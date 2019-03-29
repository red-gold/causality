import { EventEmitter } from 'events';
import { Functor } from 'causal-net.core';
import { platform } from 'causal-net.utils';
import { indexDBStorage, StorageMixins } from 'causal-net.storage';
import { termLogger } from 'causal-net.log';
class CausalNetPreprocessingStream extends platform.mixWith(EventEmitter, 
    [ StorageMixins ]){
    constructor(preprocessingStorage, functor, logger){
        super();
        this.Storage = preprocessingStorage;
        this.F = functor;
        this.logger = logger;
        this.preprocessingData = { samples: [], labels: [], finished: false, trainSet: [], testSet: [] };  
    }
    get PreprocessingData(){
        return this.preprocessingData;
    }

    get TrainSet(){
        return this.preprocessingData.trainSet;
    }

    get TestSet(){
        return this.preprocessingData.testSet;
    }
    
    set SampleTransformer(sampleFn){
        this.sampleFn = sampleFn;
    }
    set LabelTransformer(labelFn){
        this.labelFn = labelFn;
    }
    get SampleTransformer(){
        if(!this.sampleFn){
            throw Error('sampleFn is not set');
        }
        return this.sampleFn;
    }
    get LabelTransformer(){
        if(!this.labelFn){
            throw Error('labelFn is not set');
        }
        return this.labelFn;
    }
    get DataHandler(){
        const Enumerate = this.F.enumerate;
        //console.log(Enumerate([0,2,4]));//TODO: fix this failure
        const SampleTransformer = this.SampleTransformer;
        const LabelTransformer = this.LabelTransformer;
        const Storage = this.Storage;
        return (data)=>{
            return new Promise(async (resolve, reject)=>{
                let chunkName = data.ChunkName;
                if(!chunkName){
                    reject(`chunkName is not defined`);
                }
                if(data.Sample){
                    let samples = SampleTransformer(data.Sample);
                    let identity = '';
                    for(let [idx, sample] of this.F.enumerate(samples)){
                        identity = chunkName + '/' + idx;
                        await Storage.setItem('preprocessing/sample/' + identity, JSON.stringify(sample));
                        this.preprocessingData.samples.push(identity);
                        
                    }
                }
                if(data.Label){
                    let labels = LabelTransformer(data.Label);
                    let identity = '';
                    for(let [idx, label] of this.F.enumerate(labels)){
                        identity = chunkName + '/' + idx;
                        await Storage.setItem('preprocessing/label/' + identity, JSON.stringify(label));
                        this.preprocessingData.labels.push(identity);
                    }
                }
                resolve(true);
            }); 
        };
    }
    
    splitDataset(trainSize=0.9){
        const R = this.F.CoreFunctor;
        //TODO: enhance this for handle missing data/label case
        let { samples, labels } = this.preprocessingData;
        let data = this.F.zip(samples, labels);
        if(trainSize < 1){
            trainSize = parseInt(data.length*0.9);
        }    
        const [ trainSet, testSet ] = R.splitAt(trainSize, data);
        this.preprocessingData.trainSet = trainSet;
        this.preprocessingData.testSet = testSet;
        return [trainSet, testSet];
    }
    makeBatchGenerator(batchData){
        const Storage = this.Storage;
        let nextIndex = 0;
        const batchGenerator = {
                next: async()=>{
                    let samples = [], labels = [];
                    
                    for(let [samplePath, labelPath] of batchData[nextIndex]){
                        samplePath = 'preprocessing/sample/' + samplePath;
                        labelPath = 'preprocessing/label/' + labelPath;
                        let sampleItem = await Storage.getItem(samplePath);
                        let labelItem = await Storage.getItem(labelPath);
                        samples = [...samples, JSON.parse(sampleItem[samplePath])];
                        labels = [...labels, JSON.parse(labelItem[labelPath])];
                    }
                    nextIndex += 1;
                    
                    return { samples, labels };
                },
                *[Symbol.iterator]() {
                    while(nextIndex < batchData.length){
                        yield this.next();
                    }
                }
            };
        return batchGenerator;
    }
    get TrainDataGenerator(){
        const TrainSet = this.TrainSet;
        const R = this.F.CoreFunctor;
        return (batchSize)=>{
            //TODO: perform permutate
            let batchData = R.splitEvery(batchSize, TrainSet);
            
            return this.makeBatchGenerator(batchData);
        };
        
    }
    get TestDataGenerator(){
        const TestSet = this.TestSet;
        const R = this.F.CoreFunctor;
        return (batchSize)=>{
            //TODO: perform permutate
            let batchData = R.splitEvery(batchSize, TestSet);
            return this.makeBatchGenerator(batchData);
        };
    }
}
var functor = new Functor();
export default new CausalNetPreprocessingStream(indexDBStorage, functor, termLogger);