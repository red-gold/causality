class BasePipeline{
    constructor(netConfig, netParams){

    }
    set Logger(logger){
        this.logger = logger;
    }
    get Logger(){
        return this.logger;
    }
    makePredict(data){
        throw Error('implment require');
    }

    loss(data){
        throw Error('implment require');
    };

    train(data, n_iters=10, lr=0.2){
        throw Error('implment require');
    };
}

module.exports = {baseModel};