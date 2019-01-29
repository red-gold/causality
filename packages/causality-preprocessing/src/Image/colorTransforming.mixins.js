const ColorTransformingMixins = (PreprocessingClass) => class extends PreprocessingClass{
    colorTransform(sampleBuffer, channelSize, tranformFn){
        const R = this.R;
        return R.map(tranformFn, R.splitEvery(channelSize, sampleBuffer));
    }
    blackWhiteTransform(sampleBuffer, channelSize){
        const BlackWhiteFn = (pixel)=>{
            let pixelValue = pixel[0]*255 + pixel[1]*255 +pixel[2];
            if( pixelValue > 0 ){
                return 0;
            }
            else{
                return 1;
            }
        };
        this.colorTransform(BlackWhiteFn, sampleBuffer, channelSize);
    }
};

export default ColorTransformingMixins;