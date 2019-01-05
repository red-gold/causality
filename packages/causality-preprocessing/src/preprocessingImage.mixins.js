const PreprocessingImageMixins = (PreprocessingClass) => class extends PreprocessingClass{
    splitImageBuffer(imageBuffer, chunkSize){
        return this.F.splitBuffer(imageBuffer, chunkSize);
    }
};

export default PreprocessingImageMixins;