console.log('request once');
export default class CoreTensor{

    constructor(Config={Backend:'tf'}){
        var tf = require('@tensorflow/tfjs');
        require('@tensorflow/tfjs-node');
        this.T = tf;
    }
    get CoreTs(){
        return this.T;
    }
}