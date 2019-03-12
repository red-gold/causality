import levelup from 'levelup';
/**
 * This abstract BaseStorage class is use to define new storage class.
 * It provide wrapper for [levelup](https://www.npmjs.com/package/levelup).
 * @class
 */
class BaseStorage{
    constructor(){
        this.levelup = levelup;
        this.storage = null;
    }

    /**
     * The extended class must implement this method to handle each store case.
     * @memberof BaseStorage
     */
    connect(){
        throw Error('implement required');
    }

    /**
     * Get the core Storage, throw error if no storage found.
     * @readonly
     * @memberof BaseStorage
     */
    get CoreStorage(){
        if(this.storage === null){
            throw Error('storage is not connected');
        }
        return this.storage;
    }
}

export default BaseStorage;
