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

    set PreprocessingSampleFn(sampleFn){
        Assert.beInstanceOf(sampleFn, Function);
        this.preprocessingSampleFn = sampleFn;
        this.preprocessingSampleFn.bind(this);
    }
    
    set PreprocessingLabelFn(labelFn){
        Assert.beInstanceOf(labelFn, Function);
        this.preprocessingLabelFn = labelFn;
        this.preprocessingLabelFn.bind(this);
    }
    
    setPreprocessingByConfig(configure){
        const { SampleFn, LabelFn } = configure.Preprocessing;
        this.PreprocessingSampleFn = SampleFn;
        this.PreprocessingLabelFn = LabelFn;
    }
};

export default PreprocessingMixins;