const TokenizingMixins = (PreprocessingClass) => class extends PreprocessingClass{
    tokenize(imageBuffer, chunkSize){
        const R = this.F.CoreFunction;
        return R.splitEvery(chunkSize, imageBuffer);
    }
};

export default TokenizingMixins;