import { default as BaseUnsupervisedModel } from './baseUnsupervisedModel';
class AutoEncoder extends BaseUnsupervisedModel{
    constructor(encodeSize){
        this.encodeSize;
    }

    encode(encodeNetOuput){
        return encodeNetOuput;
    }

    decode(decodeNetOutput){
        return decodeNetOutput;
    }


    fit(decodeNetOutput, inputTensor){
        let decodeOuput = this.decode(decodeNetOutput);
        let reconstructError = decodeOuput.sub(inputTensor);
        return reconstructError;
    }
    
    loss(decodeNetOutput, inputTensor){
        let reconstructError = this.fit(decodeNetOutput, inputTensor);
        let squareError = reconstructError.pow(2);
        let loss = squareError.mean();
        return loss;
    }
}
export default AutoEncoder;