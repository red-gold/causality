import * as R from 'ramda';
export default class Function{
    constructor(){
        this.R = R;
    }

    get CoreFunction(){
        return this.R;
    }
    
    
    getIn(keys, item, defaultValue){
        return R.pathOr(defaultValue, keys, item);
    }
    
    setIn(keys, value, item){
        return R.assocPath(keys, value, item);
    }

    vstack(...vals){
        
    }
    hstack(...vals){

    }
    vsplit(values){
        
    }
    hsplit(values){
        return null;
    }

    hsplitEvery(values, splitSize){
        console.log({vlen: values.length, splitSize});
        return this.R.splitEvery(splitSize, values);
    }

    vsplitEvery(values, splitSize){
        return null;
    }

    zip(valueLeft, valueRight){
        this.R.zip(valueLeft, valueRight);
    }
    unzip(){

    }
}