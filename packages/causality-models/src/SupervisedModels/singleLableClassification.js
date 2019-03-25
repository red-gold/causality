import { default as BaseSupervisedModel } from './baseSupervisedModel';

class SingleLabelClassification extends BaseSupervisedModel{
    constructor(numClass){
        super();
        if(numClass > 0){
            this.numClass = numClass;
        }
        else{
            throw Error(`expect numclass, get ${numClass}`);
        }
    }

    set Net(net){
        let { Predictor } = net;
        this.net = { Predictor };
    }
    
    get Fit(){
        return (inputTensor, net=this.net)=>{
            let outPutTensor = net.Predictor(inputTensor);
            let logProb = outPutTensor.sub(outPutTensor.logSumExp(1, true));
            return logProb;
        };
    }
    
    get Predict(){
        const Fit = this.Fit;
        return (inputTensor, netRunner)=>{
            let logProb = Fit(inputTensor, netRunner);
            let predictedClass = logProb.argMax(1);
            return predictedClass;
        };
    }

    get OneHotPredict(){
        const Predict = this.Predict;
        return (inputTensor, netRunner)=>{
            let predictedClass = Predict(inputTensor, netRunner);
            let oneHotPredict = this.T.oneHot(predictedClass, this.numClass);
            return oneHotPredict;
        };
    }
    get Loss(){
        const Fit = this.Fit;
        return (inputTensor, labelTensor, netRunner)=>{
            let logProb = Fit(inputTensor, netRunner);
            let likelihood = logProb.neg().mul(labelTensor);
            let loss = likelihood.sum(1).mean();
            return loss;
        };
    }
}
export default SingleLabelClassification;