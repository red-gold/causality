const EnsembleEvaluatorMixins = (BasePipelineClass)=> class extends BasePipelineClass{ 
    async ensembleTest(batchSize, method='accuracy'){
        throw Error('implement require'); 
    }
};
export default EnsembleEvaluatorMixins;