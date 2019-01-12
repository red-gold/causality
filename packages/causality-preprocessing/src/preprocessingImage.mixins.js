const PreprocessingImageMixins = (PreprocessingClass) => class extends PreprocessingClass{
    splitImageBuffer(imageBuffer, chunkSize){
        const R = this.F.CoreFunction;
        return R.splitEvery(chunkSize, imageBuffer);
    }
};

export default PreprocessingImageMixins;