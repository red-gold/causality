const PreprocessingTabularMixins = (PreprocessingClass) => class extends PreprocessingClass{
    normalizing(data, attributeParams){
        return data;
    }
};
export default PreprocessingTabularMixins;