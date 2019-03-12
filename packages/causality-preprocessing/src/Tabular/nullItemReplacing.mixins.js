const NullItemReplacingMixins = (PreprocessingClass) => class extends PreprocessingClass{
    nullItemReplace(sample){
        throw Error('implement required');
    }
};

export default NullItemReplacingMixins;