import {Function as BaseFunction} from 'causal-net.core';
export default class Function extends BaseFunction{
    constructor(){
        super();
    }
    async forEachPromise(fn){
        
    }
    zip(data, label){
        const R = this.R;
        return R.zip(data, label);
    }
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
}