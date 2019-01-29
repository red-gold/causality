const PreprocessingMixins = (BaseClass) => class extends BaseClass{
    get PreprocessingSampleFn(){
        return this.preprocessingSampleFn;
    }
    set PreprocessingSampleFn(preprocessingSampleFn){
        this.preprocessingSampleFn = preprocessingSampleFn;
        this.preprocessingSampleFn.bind(this);
    }
    get PreprocessingLabelFn(){
        return this.preprocessingSampleFn;
    }
    set PreprocessingLabelFn(preprocessingLabelFn){
        this.preprocessingLabelFn = preprocessingLabelFn;
        this.preprocessingLabelFn.bind(this);
    }
    setPreprocessingFunctions(preprocessingSampleFn, preprocessingLabelFn){
        if(typeof(preprocessingSampleFn)!=='function'){
            throw Error('preprocessingSampleFn must be Function');
        }
        if(typeof(preprocessingLabelFn)!=='function'){
            throw Error('preprocessingLabelFn must be Function');
        }
        this.PreprocessingSampleFn = preprocessingSampleFn;
        this.PreprocessingLabelFn = preprocessingLabelFn;
    }
};

export default PreprocessingMixins;