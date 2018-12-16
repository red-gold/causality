import {Function as BaseFunction} from 'causal-net-core';

export default class Function extends BaseFunction{
    constructor(){
        super();
    }
    range(len){
        return this.R.range(0, len);
    }
    getPipeline(netConfig){
        //TODO: make assertor
        return this.R.prop('Pipeline', netConfig);
    }
    getHyperParameter(netConfig){
        //TODO: make assertor
        return this.R.prop('HyperParameters', netConfig);
    }
}