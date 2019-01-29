const ImageSplittingMixins = (PreprocessingClass) => class extends PreprocessingClass{
    imageSplit(sampleBuffer, splitSize){
        return this.R.splitEvery(splitSize, sampleBuffer);
    }
};

export default ImageSplittingMixins;