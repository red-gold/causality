const SGDParamsUpdatingMixins = (BaseSGDOptimizerClass)=>class extends BaseSGDOptimizerClass{
    set OptimizerParameters(params){
        const {LearningRate, Beta1, Beta2, Epsilon} = params;
        if(LearningRate)
    }
    updateParams(lossFn, varList){
        let loss = this.optimizer.minimze(lossFn, true, varList);
    }
}

export default SGDParamsUpdatingMixins;