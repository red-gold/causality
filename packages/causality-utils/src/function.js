import * as R from 'ramda';
export default class Function{
    constructor(){
        this.R = R;
    }

    // get CoreFn(){
    //     return this.R;
    // }
    
    // getTraverse(){
    //     return R.curry(function(keys, item){
    //         R.pipe.apply(null, R.map(R.prop, keys))(item);
    //     }); 
    // }
    
    // getIn(keys, item, defaultValue){
    //     return R.pathOr(defaultValue, keys, item);
    // }
    
    // setIn(keys, value, item){
    //     return R.assocPath(keys, value, item);
    // }
}
