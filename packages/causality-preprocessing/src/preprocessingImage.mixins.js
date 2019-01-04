const PreprocessingImageMixins = (PreprocessingClass) => class extends PreprocessingClass{
    splitImageBuffer(imageBuffer, chunkSize){
        return this.F.splitData(imageBuffer, chunkSize);
    }
};

export default PreprocessingImageMixins;