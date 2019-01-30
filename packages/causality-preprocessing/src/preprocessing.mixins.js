const PreprocessingMixins = (BaseClass) => class extends BaseClass{
    get PreprocessingSampleFn(){
        if(!this.preprocessingSampleFn){
            throw Error('setPreprocessingFunctions must be called');
        }
        return this.preprocessingSampleFn;
    }
    get PreprocessingLabelFn(){
        if(!this.preprocessingLabelFn){
            throw Error('setPreprocessingFunctions must be called');
        }
        return this.preprocessingLabelFn;
    }
    set PreprocessingSampleFn(preprocessingSampleFn){
        this.preprocessingSampleFn = preprocessingSampleFn;
        this.preprocessingSampleFn.bind(this);
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