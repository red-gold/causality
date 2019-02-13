const WordContextModelMixins = (basePipelineClass)=> class extends (basePipelineClass){
    skipGram(){
        // TODO: come up with better name later
        //implicit matrix factorization
        const Fit = (pipelineOutTensor) =>{
            let logProb = pipelineOutTensor;
            return logProb;
        };
        const Loss = (pipelineOutTensor, labelTensor)=>{
            let logProb = Fit(pipelineOutTensor);
            let likelihood = logProb.mul(labelTensor).logSigmoid();
            let loss = likelihood.mean();
            return loss;
        };
        return { Loss, Fit };
    }
};

export default WordContextModelMixins;