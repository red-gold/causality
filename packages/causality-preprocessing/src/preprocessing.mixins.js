const PreprocessingMixins = (BasePipelineClass) => class extends BasePipelineClass{
    
    set Reader(reader){

    }

    get Reader(){

    }

    set Transfomer(transformer){

    }

    get Transfomer(transformer){

    }

    set Keeper(keeper){

    }

    get Keeper(){
        if(!this.streamKeeper){
            throw Error('streamKeeper is not set');
        }
        return this.streamKeeper;
    }

    async preprocessingStream(){
        return new Promise(){

        }
    }

    TrainDataGenerator(){

    }

    TestDataGenerator(){

    }
    
    setByConfig(configure){
        const { SampleFn, LabelFn } = configure.Preprocessing;
        this.PreprocessingSampleFn = SampleFn;
        this.PreprocessingLabelFn = LabelFn;
    }
};

export default PreprocessingMixins;