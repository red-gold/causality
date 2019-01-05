import {Function as BaseFunction} from 'causal-net.core';
export default class Function extends BaseFunction{
    constructor(){
        super();
    }
    splitBuffer(data, sampleSize){
        return this.R.splitEvery(sampleSize, data);
    }
}