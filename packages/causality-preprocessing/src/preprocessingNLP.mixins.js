const PreprocessingNLPMixins = (PreprocessingClass) => class extends PreprocessingClass{
    filterBadWords(text, badWordList){
        return text;
    }
};
export default PreprocessingNLPMixins;