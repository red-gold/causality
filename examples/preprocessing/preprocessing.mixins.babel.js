import { PreprocessingMixins, tokenizerEN, nlpPreprocessing } from 'causal-net.preprocessing';
import { platform } from 'causal-net.utils';
import { Functor as BaseFunctor } from 'causal-net.core';
const PipeLineConfigure = {
    Dataset: {
        Preprocessing: {
            Reader: async ()=>{
                const Samples = new Buffer.from(new Array(1000)); 
                const Labels  = new Buffer.from(new Array(100));
                return {Sample, Label}
            },
            Transformer:{
                Sample: (sample)=>{ return sample},
                Label: (label)=>{ return label}
            },
            Keeper: {
                Sample: ()=>{},
                Label: ()=>{}
            }
        }
    }
};
nlpPreprocessing.Tokenizer = tokenizerEN;
class SimpleDataset extends platform.mixWith(BaseFunctor, 
    [PreprocessingMixins]){
    constructor(configure){
        super();
        this.setPreprocessingByConfig(configure);
    }
}
let dataset = new SimpleDataset(PipeLineConfigure);
