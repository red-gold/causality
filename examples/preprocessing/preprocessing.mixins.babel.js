import { PreprocessingMixins, tokenizerEN, nlpPreprocessing } from 'causal-net.preprocessing';
import { platform } from 'causal-net.utils';
import { Function as BaseFunction } from 'causal-net.core';
const PipeLineConfigure = {
    Preprocessing: {
        SampleFn: (sample)=>{
            return sample;
        },
        LabelFn: (label)=>{
            return label;
        }
    }
}
nlpPreprocessing.Tokenizer = tokenizerEN;
class SimpleDataset extends platform.mixWith(BaseFunction, 
    [PreprocessingMixins]){
    constructor(configure){
        super();
        this.setPreprocessingByConfig(configure);
    }
}
let dataset = new SimpleDataset(PipeLineConfigure);
