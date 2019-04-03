const EnsembleTrainerMixins = (BasePipelineClass)=> class extends BasePipelineClass{
    
    async ensembleTrain(numEpochs, batchSize, saveFileName){
        this.LayerRunner.NetParameters = this.ParameterInitializer(this.LayerRunner.NetLayers);
        let losses = await this.train(numEpochs, batchSize);
        await this.saveParams(saveFileName);
        return {[saveFileName]: losses};
    }
};

export default EnsembleTrainerMixins;