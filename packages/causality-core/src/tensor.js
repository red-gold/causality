var tf = require('@tensorflow/tfjs');
require('@tensorflow/tfjs-node');

const SuppportBackend = {'tf': tf};


export default class TensorBackend{

    constructor(Config={Backend:'tf'}){
        console.log({tf});
        this.T = SuppportBackend[Config.Backend];
    }
    get Tensor(){
        return this.T;
    }
}