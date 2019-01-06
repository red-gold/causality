export default class BaseImgDataset{
    constructor(dataSize, numClass){
        this.dataSize = dataSize;
        const [numSample, ...imgSize]  = this.dataSize;
        this.numSample = numSample;
        this.imgSize  = imgSize;
        this.numClass = numClass;
    }
    
    summary(){
        return {numSample: this.numSample,
                imgSize: this.imgSize,
                dataSize: this.dataSize, 
                numClass: this.numClass};
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