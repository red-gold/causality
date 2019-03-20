const DatasetMixins = (BasePipelineClass)=> class extends BasePipelineClass {
    get TrainDataGenerator(){

    }
    get TestDataGenerator(){

    }
    
    get ValidateDataGenerator(){

    }

    get candiateGenerator(){
        
    }
    get SamplePreprocessing(){

    }

    get LabelPreprocessing(){

    }

    set TrainDataGenerator(generator){

    }    
    
    set TestDataGenerator(generator){

    }

    set ValidateDataGenerator(generator){

    }

    set dataGenerator(dataGenerator){

    }

    setDatasetByConfig(){

    }
};

export defaut DatasetMixins;