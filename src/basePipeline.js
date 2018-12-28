class BasePipeline{
    constructor(netConfig, netParams){

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
    async getParams(){
        const w = await Promise
                    .all(R.map((v)=>v.data())
                        (R.values(this.params)));
        return R.fromPairs(R.__)
                    (R.addIndex(R.map)
                        ((k,i)=>[k, w[i]])(R.keys(this.params)));
    }
    async saveSarams(fileName){
        const w = await this.get_params();
        console.log(w);
        return fs.writeJSON(fileName, w);
    }
}

module.exports = {baseModel};