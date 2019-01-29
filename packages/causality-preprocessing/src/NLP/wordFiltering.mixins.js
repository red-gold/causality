const WordFilteringMixins = (PreprocessingClass) => class extends PreprocessingClass{
    filterBadWords(text, badWordList){
        return text;
    }
};
export default WordFilteringMixins;