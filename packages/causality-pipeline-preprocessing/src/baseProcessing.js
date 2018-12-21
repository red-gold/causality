export default class BaseProcessing{
    constructor(memoryCach=null){
        this.memoryCache = null;
    }
    fit(dataGenerator, memoryCache){
        throw Error('implement require');
    }
    transform(dataGenerator, memoryCache){
        throw Error('implement require');
    }
    saveParams(savedir=null){
        throw Error('implement require');
    }
    loadParams(savedir=null){
        throw Error('implement require');
    }
    saveParamsSync(savedir=null){
        throw Error('implement require');
    }
    loadParamsSync(savedir=null){
        throw Error('implement require');
    }
}