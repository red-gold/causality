const PreprocessingMixins = (BasePipelineClass) => class extends BasePipelineClass{
    get Preprocessing(){
        if( !this.streamPreprocessing ){
            throw Error('streamPreprocessing is not set');
        }
        return this.streamPreprocessing;
    }

    set Preprocessing(streamPreprocessing){
        this.streamPreprocessing = streamPreprocessing;
    }

    setByConfig(pipelineConfig){
        if(super.setByConfig){
            super.setByConfig(pipelineConfig);
        }
        const { Preprocessing } = pipelineConfig.Dataset;
        this.Logger.groupBegin('preprocessing');
        if(this.DataSource && Preprocessing){
            const { SampleTransformer, LabelTransformer } = Preprocessing;
            this.Preprocessing.SampleTransformer = SampleTransformer;
            this.Preprocessing.LabelTransformer = LabelTransformer;
            this.Preprocessing.setDataHandler();
            pipelineConfig.TrainDataGenerator = this.Preprocessing.TrainDataGenerator;
            pipelineConfig.TestDataGenerator = this.Preprocessing.TestDataGenerator;
        }
        this.Logger.groupEnd();
        return pipelineConfig;
    }
};

export default PreprocessingMixins;