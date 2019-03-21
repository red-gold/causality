import { default as BaseUnsupervisedModel } from './baseUnsupervisedModel';
class AutoEncoder extends BaseUnsupervisedModel{
    constructor(encodeSize){
        this.encodeSize;
    }

    encode(pipelineOutTensor){
        return pipelineOutTensor;
    }

    decode(pipelineOutTensor){
        return pipelineOutTensor
    }


    fit(pipelineOutTensor, inputTensor){
        let reconstructError = this.decode(pipelineOutTensor).sub(inputTensor);
        return reconstructError;
    }
    
    loss(pipelineOutTensor, inputTensor){
        let reconstructError = this.fit(pipelineOutTensor, inputTensor);
        let squareError = reconstructError.pow(2);
        let loss = squareError.mean();
        return loss;
    }
}
export default AutoEncoder;