const ItemNormalizingMixins = (PreprocessingClass) => class extends PreprocessingClass{
    itemNormalize(sample){
        return sample;
    }
};

export default ItemNormalizingMixins;