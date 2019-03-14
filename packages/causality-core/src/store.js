/**
 * class Store is the primitive class for composing higher store class.
 * This class wrap [levelup](https://www.tensorflow.org/js) 
 * for connect with abstract-leveldown compliant stores.
 * @class Store
 */
export default class Store{
    constructor(){
        this.levelup = require('levelup');
        this.store = null;
        this.logger = console;
    }
    
    async connect(){
        throw Error('implement required');
    }

    correctName(filePath){
        filePath = '/' +filePath;
        return filePath.replace(/\/{1,}/g, '/');
    }

    /**
     * Get item given the key
     * @param { String } key - key name
     * @param {boolean} [asBuffer=false] - return object or buffer array, default object
     * @returns { Object } item object 
     * @memberof MemoryCache
     */
    async getItem(key, asBuffer=false){
        if(!this.store){
            throw Error('store is not connect');
        }
        key = this.correctName(key);
        return new Promise((resolve, reject)=>{
            this.store.get(key, {asBuffer}, (err, data)=>{
                if(err){
                    this.logger.debug({key, err});
                    reject('error read');
                }
                else{
                    resolve({[key]: data});
                }
            });
        });
    }
    /**
     * Set new item with the given key and value
     * @param { String } key - key name of item
     * @param { Object } data - value of item
     * @returns { Promise } - new key promise
     * @memberof MemoryCache
     */
    async setItem(key, data){
        if(!this.store){
            throw Error('store is not connect');
        }
        key = this.correctName(key);
        return new Promise((resolve, reject)=>{
            this.store.put(key, data, (err)=>{
                if(err){
                    this.logger.debug({key, err});
                    reject('error write');
                }
                else{
                    resolve({[key]: data});
                }
            });
        });
    }
    /**
     * Delete item given the item key
     * @param { String } key - key name to delete
     * @returns { Promise } deleted key promise
     * @memberof MemoryCache
     */
    async delItem(key){
        if(!this.store){
            throw Error('store is not connect');
        }
        key = this.correctName(key);
        return new Promise((resolve, reject)=>{
            this.store.del(key, (err)=>{
                if(err){
                    this.logger.debug({err});
                    reject('error write');
                }
                else{
                    resolve(key);
                }
            });
        });
    }
    /**
     * Make name maching function based on prefix path
     * @param { String } name - prefix name
     * @returns { Function } name matching function
     * @memberof MemoryCache
     */
    makeCheckItemNameFn(name){
        var pattern = name;
        var regex = new RegExp(`${pattern}.*`,'g');
        return (fileName)=>fileName.match(regex) || [];
    }
    
    /**
     * Get the current items under the prefix path
     * @param { String } [namePath='/']
     * @returns { Array } list of item names
     * @memberof MemoryCache
     */
    async getItemList(namePath='/'){
        if(!this.store){
            throw Error('store is not connect');
        }
        namePath = this.correctName(namePath);
        const NameTester = this.makeCheckItemNameFn(namePath);
        return new Promise((resolve, reject)=>{
            let fileList = [];
            this.store.createKeyStream()
                .on('data', (key) =>{
                    key = key.toString('utf8');
                    if(NameTester(key).length===1){
                        fileList.push(key);
                    }
                })
                .on('close', () => resolve(fileList) )
                .on('end',  () => resolve(fileList) )
                .on('error', (err) =>{ 
                    this.logger.debug({ err });
                    reject('error getFileList') ;
                });
        });
    }
}