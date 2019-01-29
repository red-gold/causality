const NullItemReplacingMixins = (PreprocessingClass) => class extends PreprocessingClass{
    nullItemReplace(sample){
        return sample;
    }
};

export default NullItemReplacingMixins;