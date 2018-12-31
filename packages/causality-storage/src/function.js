import * as R from 'ramda';
export default class Function{
    constructor(){
        this.R = R;
    }

    get CoreFn(){
        return this.R;
    }
}
