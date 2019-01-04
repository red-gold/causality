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
}