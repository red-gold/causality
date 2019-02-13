const SequenceDecodingMixins = (basePipelineClass)=> class extends (basePipelineClass){
    sequenceDecoding(){
        const Fit = (pipelineOutTensor) =>{
            let logProb = pipelineOutTensor.sub(pipelineOutTensor.logSumExp(1, true));
            return logProb;
        };
        const Predict = (pipelineOutTensor) =>{
            let logProb = Fit(pipelineOutTensor);
            let predictedClass = logProb.argMax(1);
            return predictedClass;
        };
        const OneHotPredict = (pipelineOutTensor, numClasses) =>{
            let predictedClass = Predict(pipelineOutTensor);
            let oneHotPredict = this.T.oneHot(predictedClass, numClasses);
            return oneHotPredict;
        };
        const Loss = (pipelineOutTensor, labelTensor)=>{
            let logProb = Fit(pipelineOutTensor);
            let likelihood = logProb.neg().mul(labelTensor);
            let loss = likelihood.mean();
            return loss;
        };
        return { Predict, OneHotPredict, Loss, Fit };
    }
};

export default SequenceDecodingMixins;