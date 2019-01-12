export default class Tensor{
    constructor(){
        var tf = require('@tensorflow/tfjs');
        this.T = tf;
    }
    get CoreTensor(){
        return this.T;
    }
}