var tf = require('@tensorflow/tfjs');
import('@tensorflow/tfjs-node');
import('@tensorflow/tfjs-node-gpu');

export default class Tensor{
    constructor(){
        this.T = tf;
        this.logger = console;
    }
    static get CoreTensor(){
        return tf;
    }
}