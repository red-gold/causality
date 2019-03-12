import { Assert } from 'causal-net.utils';
const PreprocessingMixins = (BasePipelineClass) => class extends BasePipelineClass{
    
    get PreprocessingSampleFn(){
        if(!this.preprocessingSampleFn){
            throw Error('preprocessingSampleFn is not set');
        }
        return this.preprocessingSampleFn;
    }
    
    get PreprocessingLabelFn(){
        if(!this.preprocessingLabelFn){
            throw Error('preprocessingLabelFn is not set');
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
        Assert.beInstanceOf(preprocessingSampleFn, Function);
        Assert.beInstanceOf(preprocessingLabelFn, Function);
        this.PreprocessingSampleFn = preprocessingSampleFn;
        this.PreprocessingLabelFn = preprocessingLabelFn;
    }
};

export default PreprocessingMixins;