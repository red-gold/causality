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
        
        return this.R.splitEvery(splitSize, values);
    }

    vsplitEvery(values, splitSize){
        return null;
    }

    zip(...pairs){
        return this.R.zip(...pairs);
    }
    unzip(datum){
        const R = this.R;
        const Unzip = (uz, pair)=>{
            uz[0] = [...uz[0], pair[0]];
            uz[1] = [...uz[1], pair[1]];
            return uz;
        };
        return R.reduce(Unzip,[[], []],datum);
    }
}