/**
 * class Functor is the primitive class for composing higher class.
 * This class wrap [Ramda](https://ramdajs.com/) for providing Functional programming style method.
 * @class Functor
 */
class Functor {
    constructor(){
        /**
         * @private { Object } Ramda instance
         */
        this.R = require('ramda');
    
        /**
         * @private { Logger } logger   
         */        
        this.logger = console;
    }
    /**
     * This method return core Ramda instance
     * @readonly
     * @memberof Functor
     */
    get CoreFunctor(){
        return this.R;
    }
    
    /**
     *
     * @param { Array } keys
     * @param { Object } item
     * @param { Any } defaultValue - return value in case of not found
     * @returns { Any } return found value or defaultValue
     * @memberof Functor
     */
    getIn(keys, item, defaultValue){
        return this.R.pathOr(defaultValue, keys, item);
    }
    
    /**
     * set value into object by the keys list
     * @param { Array } keys
     * @param { Object } value
     * @param { Object } item - item to set
     * @returns { Any } return found value or defaultValue
     * @memberof Functor
     */
    setIn(keys, value, item){
        return this.R.assocPath(keys, value, item);
    }

    /**
     * zip two array
     * @param { Array } pairs - two arrays to zip
     * @returns { Array } array after zip
     * @memberof Functor
     */
    zip(...pairs){
        return this.R.zip(...pairs);
    }
    /**
     * Unzip array of pairs to two arrays
     * @param { Array } pairs - array of pairs to unzip
     * @returns { [Array1, Array2] } - two arrays 
     * @memberof Functor
     */
    unzip(pairs){
        const R = this.R;
        const Unzip = (uz, [v1, v2])=>{
            uz[0] = [...uz[0], v1];
            uz[1] = [...uz[1], v2];
            return uz;
        };
        return R.reduce(Unzip,[[], []],pairs);
    }
}

export default Functor;