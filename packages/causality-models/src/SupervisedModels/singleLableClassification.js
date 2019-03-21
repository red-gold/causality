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
    
    fit(pipelineOutTensor){
        let logProb = pipelineOutTensor.sub(pipelineOutTensor.logSumExp(1, true));
        return logProb;
    }
    
    predict(predictNetOutput){
        let logProb = this.fit(predictNetOutput);
        let predictedClass = logProb.argMax(1);
        return predictedClass;
    }

    oneHotPredict(predictNetOutput){
        let predictedClass = this.predict(predictNetOutput);
        let oneHotPredict = this.T.oneHot(predictedClass, this.numClass);
        return oneHotPredict;
    }
    loss(pipelineOutTensor, labelTensor){
        let logProb = this.fit(pipelineOutTensor);
        let likelihood = logProb.neg().mul(labelTensor);
        let loss = likelihood.sum(1).mean();
        return loss;
    }
}
export default SingleLabelClassification;