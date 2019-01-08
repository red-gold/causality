import {default as Function} from './function';
export default class BaseImgDataset{
    constructor(datasetConfigure, configureAssertion=null){
        if(configureAssertion){
            configureAssertion(this.datasetConfigure);
        }
        this.configuration = datasetConfigure;
        const {numSamples, sampleSize, numClasses} = this.configuration;
        this.dataSize = [numSamples, ...sampleSize];
        
        this.numSamples = numSamples;
        this.sampleSize = sampleSize;
        this.numClass   = numClasses;
        this.F = new Function();
    }
    
    summary(){
        return this.configuration;
    }
    
    async fetchDataset(saveDir=null){
        throw Error('implement required');
    }

    async loadData(storage){
        throw Error('implement required');
    }

    async loadLabel(storage){
        throw Error('implement required');
    }    
    
    async loadDataset(storage){
        throw Error('implement required');
    }

    makeSampleGenerator(batchSize=10){
        throw Error('implement required');
    }
}