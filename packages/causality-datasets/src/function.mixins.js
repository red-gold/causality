const FunctionMixins = (BaseFunctionClass)=> class extends BaseFunctionClass{ 
    getImgBufferSize(imgSize){
        const R = this.R;
        return R.reduce((s,d)=>s*d,1,imgSize);
    }
    generatorWithIndex(items){
        const R = this.R;
        return R.addIndex(R.map)((d, idx)=>[idx, d], items);
    }
    splitTrainTestSet(items, splitIndex){
        const R = this.R;
        return R.splitAt(splitIndex, items);
    }
};
export default FunctionMixins;