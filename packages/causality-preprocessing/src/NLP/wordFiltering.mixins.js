const WordFilteringMixins = (PreprocessingClass) => class extends PreprocessingClass{
    filterBadWords(tokens, badWordList){
        return R.filter((token)=>R.findIndex(badWordList, token)!==-1, tokens);
    }
};
export default WordFilteringMixins;