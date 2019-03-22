import { PreprocessingMixins, tokenizerEN, nlpPreprocessing } from 'causal-net.preprocessing';
import { platform } from 'causal-net.utils';
import { Function as BaseFunction } from 'causal-net.core';
const PipeLineConfigure = {
    Dataset: {
        Source: async ()=>{
            const Samples = new Buffer.from(new Array(1000)); 
            const Labels  = new Buffer.from(new Array(100));
            return {Samples, Labels}
        },
        Preprocessing: {
            Label:(samples)=>{
                return samples;
            },
            Sample:(labels)=>{
                return labels;
            }
        },
        Feeder:{
            Train: ()=>{ 

            },
            Test: ()=>{
                
            }
        },
    }
};
nlpPreprocessing.Tokenizer = tokenizerEN;
class SimpleDataset extends platform.mixWith(BaseFunction, 
    [PreprocessingMixins]){
    constructor(configure){
        super();
        this.setPreprocessingByConfig(configure);
    }
}
let dataset = new SimpleDataset(PipeLineConfigure);
