/**
 * class Tensor is the primitive class for composing higher class.
 * This class wrap [tensorflowjs](https://www.tensorflow.org/js) for providing tensor calculation
 * @class Tensor
 */
export default class Tensor{
    constructor(){
        this.T = require('@tensorflow/tfjs');
        require('@tensorflow/tfjs-node');
        require('@tensorflow/tfjs-node-gpu');
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

    isTensor(object){
       return object instanceof this.T.Tensor; 
    }
}