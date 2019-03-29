const PreprocessingMixins = (BasePipelineClass) => class extends BasePipelineClass{
    set Preprocessing(preprocessing){
        this.preprocessing = preprocessing;
    }
    get Preprocessing(){
        if(!this.preprocessing){
            throw Error('preprocessing is not set');
        }
        return this.preprocessing;
    }    
    setByConfig(pipelineConfig){
        const { SampleTransformer, LabelTransformer } = pipelineConfig.Dataset.Preprocessing;
        this.Preprocessing.SampleTransformer = SampleTransformer;
        this.Preprocessing.LabelTransformer = LabelTransformer;
        pipelineConfig.Dataset.TrainDataGenerator = this.preprocessing.TrainDataGenerator;
        pipelineConfig.Dataset.TestDataGenerator = this.preprocessing.TestDataGenerator;
        return pipelineConfig;
    }
};

export default PreprocessingMixins;