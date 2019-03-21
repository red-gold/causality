export default class BaseNLPDataset{
    constructor(datasetConfigure){
        this.configuration = datasetConfigure;
        const {numSamples, sampleSize, numClasses} = this.configuration;
        this.dataSize = [numSamples, ...sampleSize];
        
        this.numSamples = numSamples;
        this.sampleSize = sampleSize;
        this.numClass   = numClasses;
    }
    
    summary(){
        return this.configuration;
    }
}