import { Function } from 'causal-net.core';
class Vocabulary extends Function{
    constructor(){  
        super();
        this.vocab = {};
    }
    get Memory(){
        return this.memory;
    }
    set Memory(memory){
        this.memory = memory;
    }
    
    vocabFilter(){
        const R = this.R;
        let wordCounts = R.toPairs(this.vocab);
        let [discardedWords, keptWords] = R.splitWhen(([w,f])=>R.lte(1)(f), wordCounts);
        this.vocab = R.fromPairs(keptWords);
        return this.vocab;
    }
    vocabUpdate(word){
        let prevCount = this.vocab[word];
        if(prevCount){
            this.vocab[word] += 1;
        }
        else{
            this.vocab[word] = 1;
        }
    }

    wordsLookup(memorySlots){

    }

    memorySlotsLookup(words){
        const R = this.R;
        let wordCounts = R.toPairs(this.vocab);
        return R.map( word => R.findIndex(R.propEq('0', word), wordCounts) )(words);
    }

    getFraction(){
        const R = this.R;
        let wordCounts = R.toPairs(this.vocab);
        let counts = R.map(([w,c])=>c, wordCounts); 
        let countTotal = R.sum(counts);
        return R.map((count)=>count / countTotal, counts);
    }
    
    negSubSampling(samplingSize, ignoreIdx=[]){
        const R = this.R;
        let w_fracs = this.getFraction();
        let p_w = R.addIndex(R.map)((frac, idx)=>{
            if( R.findIndex((x)=>x===idx)(ignoreIdx) > -1 ){
                return 0.0;    
            }
            else{
                return Math.sqrt(frac / 0.001 + 1)*(0.001 / frac);
            }
        }, w_fracs); 
        return Sampling;
    }
}
let vocab = new Vocabulary(); 
vocab.vocabUpdate('the');
vocab.vocabUpdate('a');
vocab.vocabUpdate('the');
vocab.vocabUpdate('he');
vocab.vocabUpdate('a');
console.log(vocab.vocabFilter());
console.log(vocab.getFraction());
console.log(vocab.negSubSampling());
export default Vocabulary;