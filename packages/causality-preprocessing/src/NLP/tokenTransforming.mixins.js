const TokenTransformingMixins = (PreprocessingClass) => class extends PreprocessingClass{
    badWordsFilter(tokens, badWordList){
        const R = this.R;
        return R.filter((token)=>R.not(R.find(R.equals(token))(badWordList)), tokens);
    }

    wordFreqCount(tokens, freqCount={}){
        const R = this.R;
        const UpdateFreq = (freqCount, token)=>{
            if(freqCount[token] === undefined){
                freqCount[token] = 1;
            }
            else{
                freqCount[token] += 1;
            }
            return freqCount;
        };
        return R.reduce(UpdateFreq, freqCount, tokens);
    }
};
export default TokenTransformingMixins;