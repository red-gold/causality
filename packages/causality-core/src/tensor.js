export default class CoreTensor{
    constructor(config={Backend:'tf'}){
        var tf = require('@tensorflow/tfjs');
        require('@tensorflow/tfjs-node-gpu');
        // require('@tensorflow/tfjs-node');
        this.T = tf;
    }
    get CoreTs(){
        return this.T;
    }
}