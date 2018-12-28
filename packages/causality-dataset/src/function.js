import {Function as BaseFunction} from 'causal-net-core';
export default class Function extends BaseFunction{
    constructor(){
        super();
    }
    splitBuffer(data, sampleSize){
        return this.R.splitEvery(sampleSize, data);
    }
    zip(data, label){
        return this.R.zip(data, label);
    }
    generatorWithIndex(items){
        const R = this.R;
        return R.addIndex(R.map)((d, idx)=>[idx, d], items);
    }
    makeTrainTestSet(items, splitIndex){
        const R = this.R;
        return R.splitAt(splitIndex, items);
    }
}