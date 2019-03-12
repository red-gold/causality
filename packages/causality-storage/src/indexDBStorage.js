import { Platform } from 'causal-net.utils';
import { default as BaseStorage } from './baseStorage';
import { default as PNGFileMixins } from './PNGFile.mixins';
import { default as TextFileMixins } from './textFile.mixins';
import { default as CSVFileMixins } from './CSVFile.mixins';
import { default as LevelDownMixins } from './indexDBStorage.mixins.node';
import { default as LevelJSMixins } from './indexDBStorage.mixins.web';

/**
 * This indexDBStorage class is the default consistent storage based on 
 * [leveldown](https://www.npmjs.com/package/leveldown) storage 
 * with support file extends: png, csv, text by those corresponding mixins.
 * mixWith:
 *  - 'node': [LevelDownMixins, TextFileMixins, PNGFileMixins, CSVFileMixins],
 *  - 'web': [LevelJSMixins, TextFileMixins, PNGFileMixins, CSVFileMixins]
 * @class IndexDBStorage
 * @extends {  BaseStorage } 
 * @example
 * [EXAMPLE ../examples/storage.babel.js]
 */
class IndexDBStorage extends Platform.mixWith( BaseStorage, 
                       { 'node': [LevelDownMixins, TextFileMixins, PNGFileMixins, CSVFileMixins],
                          'web': [LevelJSMixins, TextFileMixins, PNGFileMixins, CSVFileMixins] } ){
    /**
     * Standardize the given name path
     * @private
     * @param { String } key
     * @returns
     * @memberof IndexDBStorage
     */
    reformateName(key){
        key = key.replace(/\/{2,}/g,'/');
        if(key[0]==='/'){
            return key;
        }
        else{
            return '/' + key;
        }
    };
    
    /**
     * Get item given the key name, reject if key not existed
     * @param { String } key - key name
     * @param { Boolean } [asBuffer=false] - if true, return value as raw buffer object
     * @returns { Promise } item promise
     * @memberof IndexDBStorage
     */
    async getItem(key, asBuffer=false){
        return new Promise((resolve, reject)=>{
            this.storage.get(key, {asBuffer}, (err, data)=>{
                if(err){
                    console.error({err});
                    reject('error read');
                }
                else{
                    resolve({[key]: data});
                }
            });
        });
    }
    
    /**
     * Set new storage item with the given key, value as buffer
     * @param { String } key - key name
     * @param { Buffer } value - value
     * @returns { Promise } key promise
     * @memberof IndexDBStorage
     */
    async setItem(key, data){
        
        return new Promise((resolve, reject)=>{
            key = this.reformateName(key);
            this.storage.put(key, data, (err)=>{
                if(err){
                    console.error({err});
                    reject('error write');
                }
                else{
                    resolve(key);
                }
            });
        });
    }
    /**
     * Delete item given key
     * @param { String } key
     * @returns { Promise } key promise
     * @memberof IndexDBStorage
     */
    async delItem(key){
        return new Promise((resolve, reject)=>{
            key = this.reformateName(key);
            this.storage.del(key, (err)=>{
                if(err){
                    console.error({err});
                    reject('error write');
                }
                else{
                    resolve(key);
                }
            });
        });
    }

    /**
     * Batch operation with Array of ops
     * @param { String } key
     * @returns { Promise } key promise
     * @memberof IndexDBStorage
     * @example
     *  let ops = [
     *   { type: 'put', key: 'temp', value: '123445' },
     *   { type: 'del', key: 'temp' }];
     *  //batch does not support 'get' type
     *  let batchResult = await indexDBStorage.batch(ops);
     */
    async batch(ops){
        return new Promise((resolve, reject)=>{
            this.storage.batch(ops, (err, data)=>{
                if(err){
                    console.error({err});
                    reject('error ops');
                }
                else{
                    resolve(ops);
                }
            });
        });
    }

    /**
     * Delete item by the given file path, reject with error if not existed
     * @param { String } filePath
     * @returns { Promise } filePath promise
     * @memberof IndexDBStorage
     */
    async deleteItem(filePath){
        return new Promise((resolve, reject)=>{
            this.storage.del(filePath, (err)=>{
                if(err){
                    console.error({err});
                    reject('error ops');
                }
                else{
                    resolve(filePath);
                }
            });
        });
    }
    /**
     * File item with match the file path prefix pattern and delete all
     * return list of deleted files
     * @param { String } filePath - pattern of file path
     * @returns { Promise } deleted files list promise
     * @memberof IndexDBStorage
     */
    async deleteFileByPrefix(filePath){
        const DelOp = (key)=>({type: 'del', key: key});
        let fileList = await this.getFileList(filePath);
        let delFileOps = fileList.map(f=>DelOp(f));
        return await this.batch(delFileOps);
    }

    /**
     * Create matching regex test given the name prefix pattern
     * @param { String } namePattern - the pattern to be checked
     * @returns { Function } pattern matching for input filename
     * @memberof IndexDBStorage
     */
    createCheckFileNameFn(namePattern){
        var regex = new RegExp(`^${namePattern}.*`,'g');
        return (fileName)=>fileName.match(regex) || [];
    }
    /**
     * Get files inside storage that match the file path pattern
     * @param { String } [filePath='/'] - file path prefix pattern
     * @returns { Promise } file list promise
     * @memberof IndexDBStorage
     */
    async getFileList(filePath='/'){
        const NameTester = this.createCheckFileNameFn(filePath);
        return new Promise((resolve, reject)=>{
            let fileList = [];
            this.storage.createKeyStream()
                .on('data', (key) =>{
                    key = key.toString('utf8');
                    if(NameTester(key).length===1){
                        fileList.push(key);
                    }
                })
                .on('close', () => resolve(fileList) )
                .on('end',  () => resolve(fileList) )
                .on('error', (err) =>{ 
                    reject(err);
                });
        });
    }
}

export default new IndexDBStorage();