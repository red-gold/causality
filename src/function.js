import {Function as BaseFunction} from 'causal-net-core';

export default class Function extends BaseFunction{
    constructor(){
        super();
    }
    range(len){
        return this.R.range(0, len);
    }
}