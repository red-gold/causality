export default class BaseImgDataset{
    constructor(dataSize, numClass){
        this.dataSize = dataSize;
        this.numClass = numClass;
    }
    async fetchDataset(saveDir=null, storage){
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