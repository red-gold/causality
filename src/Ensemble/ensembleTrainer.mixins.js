const EnsembleTrainerMixins = (BasePipelineClass)=> class extends BasePipelineClass{
    
    async ensembleTrain(numEpochs, batchSize, saveFileName){
        let losses = await this.train(numEpochs, batchSize);
        await this.saveParams(saveFileName);
        return {[saveFileName]: losses};
    }
};

export default EnsembleTrainerMixins;