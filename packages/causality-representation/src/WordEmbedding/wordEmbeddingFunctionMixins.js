const WordEmbeddingFunctionMixins = (BaseFunctionClass) => class extends BaseFunctionClass{
    converVecStringToNumbers(vecString){
        return R.map(Number)(vecString.split(','));
    }
}
export default WordEmbeddingFunctionMixins;