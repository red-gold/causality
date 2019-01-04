import {Function as BaseFunction} from 'causal-net.core';
export default class Function extends BaseFunction{
    constructor(){
        super();
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