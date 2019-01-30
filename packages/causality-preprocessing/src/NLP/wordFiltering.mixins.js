const WordFilteringMixins = (PreprocessingClass) => class extends PreprocessingClass{
    filterBadWords(tokens, badWordList){
        const R = this.R;
        return R.filter((token)=>R.not(R.find(R.equals(token))(badWordList)), tokens);
    }
};
export default WordFilteringMixins;