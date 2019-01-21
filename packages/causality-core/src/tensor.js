export default class Tensor{
    constructor(){
        var tf = require('@tensorflow/tfjs');
        import('@tensorflow/tfjs-node');
        // import('@tensorflow/tfjs-node-gpu');
        this.T = tf;
    }
    get CoreTensor(){
        return this.T;
    }
}