const EnsembleEvaluatorMixins = (BasePipelineClass)=> class extends BasePipelineClass{ 
    async ensembleTest(batchSize){
        throw Error('implement require'); 
    }
};
export default EnsembleEvaluatorMixins;