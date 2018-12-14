class BaseDataSet{
    constructor(DataUrl, LabelUrl){

    }
    fetchDataset(saveDir=null){
        throw Error('implement required');
    }

    loadDataSync(){
        throw Error('implement required');
    }

    loadLabelSync(){
        throw Error('implement required');
    }    
    
    loadDatasetSync(memcache){
        throw Error('implement required');
    }

    getSampleGenerator(batchSize=10){
        throw Error('implement required');
    }
}