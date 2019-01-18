import tf from '@tensorflow/tfjs';

export default class Tensor{
    constructor(){
        this.T = tf;
    }
    get CoreTensor(){
        return this.T;
    }
}