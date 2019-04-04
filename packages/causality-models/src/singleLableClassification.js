import { default as BaseModel } from './baseModel';

class SingleLabelClassification extends BaseModel{
    constructor(numClass){
        super();
        if(numClass > 0){
            this.numClass = numClass;
        }
        else{
            throw Error(`expect numclass, get ${numClass}`);
        }
    }

    set LayerRunner(layerRunner){
        let { Predictor } = layerRunner;
        this.runner = { Predictor };
    }

    get LayerRunner(){
        if(!this.runner){
            throw Error('runner is not set');
        }
        return this.runner;
    }
    
    get Fit(){
        const { Predictor } = this.LayerRunner;
        return (inputTensor)=>{
            let outPutTensor = Predictor(inputTensor);
            let logProb = outPutTensor.sub(outPutTensor.logSumExp(1, true));
            return logProb;
        };
    }
    
    get Predict(){
        const Fit = this.Fit;
        return (inputTensor)=>{
            let logProb = Fit(inputTensor);
            let predictedClass = logProb.argMax(1);
            return predictedClass;
        };
    }

    get OneHotPredict(){
        const Predict = this.Predict;
        return (inputTensor)=>{
            let predictedClass = Predict(inputTensor);
            let oneHotPredict = this.T.oneHot(predictedClass, this.numClass);
            return oneHotPredict;
        };
    }
    get Loss(){
        const Fit = this.Fit;
        return (inputTensor, labelTensor)=>{
            let logProb = Fit(inputTensor);
            let likelihood = logProb.neg().mul(labelTensor);
            let loss = likelihood.sum(1).mean();
            return loss;
        };
    }
}
export default SingleLabelClassification;