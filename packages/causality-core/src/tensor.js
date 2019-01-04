export default class Tensor{
    constructor(){
        var tf = require('@tensorflow/tfjs');
        // require('@tensorflow/tfjs-node-gpu');
        this.T = tf;
    }
    get CoreTensor(){
        return this.T;
    }
}