import {Function as BaseFunction} from 'causal-net.layer';

export default class Function extends BaseFunction{
    constructor(){
        super();
    }
    range(len){
        return this.R.range(0, len);
    }

    isParameter(val){
        const R = this.R;
        return R.is(Array)(val) && R.all(R.is(Number), val);
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