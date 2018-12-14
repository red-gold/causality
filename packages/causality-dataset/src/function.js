import {F as BaseFunction} from 'causal-net-utils';
export default class Function extends BaseFunction{
    constructor(){
        super();
    }
    splitBuffer(data, sampleSize){
        return this.R.splitEvery(sampleSize, data);
    }
    zip(data, label){
        return R.zip(data, label);
    }
    generatorWithIndex(items){
        return R.addIndex(R.map((i,d)=>[i,d], items));
    }
}