import { PreprocessingMixins, tokenizerEN, nlpPreprocessing } from 'causal-net.preprocessing';
import { Platform } from 'causal-net.utils';
import { Tensor } from 'causal-net.core';
const PipeLineConfigure = {
    Preprocessing: {
        SampleFn: (sample)=>{
            return sample;
        },
        LabelFn: (label)=>{
            return label;
        },
        ConnectFn: ()=>{
            console.log('connect is called');
        }
    }
}
nlpPreprocessing.Tokenizer = tokenizerEN;
class SimpleDataset extends Platform.mixWith(Tensor, [PreprocessingMixins]){
    constructor(configure){
        super();
        this.setPreprocessingByConfig(configure);
    }
}
let dataset = new SimpleDataset(PipeLineConfigure);
