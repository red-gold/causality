var tf = require('@tensorflow/tfjs');
import('@tensorflow/tfjs-node');
import('@tensorflow/tfjs-node-gpu');
/**
 * class Tensor is the primitive class for composing higher class.
 * This class wrap [tensorflowjs](https://www.tensorflow.org/js) for providing tensor calculation
 * @class Tensor
 */
export default class Tensor{
    constructor(){
        this.T = tf;
        this.logger = console;
    }
    /**
     * This method return the core tensor instance
     * @readonly
     * @memberof Tensor
     */
    get CoreTensor(){
        return this.T;
    }
}