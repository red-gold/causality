import {Platform, Fetch} from 'causal-net.utils';
import {default as BaseStorage} from './baseStorage';
import {default as PNGFileMixins} from './PNGFileMixins';
import {default as LevelDownMixins} from './indexDBStorage.mixins.node';
import {default as LevelJSMixins} from './indexDBStorage.mixins.web';


class IndexDBStorage extends Platform.mixWith(BaseStorage, 
                       {'node': [LevelDownMixins, PNGFileMixins],
                         'web': [LevelJSMixins, PNGFileMixins]}){

    reformateName(key){
        key = key.replace(/\/{2,3,4,5}/g,'/');
        if(key[0]==='/'){
            return key;
        }
        else{
            return '/' + key;
        }
    };

    createCheckFileNameFn(name){
        var pattern = name;
        var regex = new RegExp(`^${pattern}.*`,'g');
        return (fileName)=>fileName.match(regex) || [];
    };

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


    async deleteItem(filePath){
        return new Promise((resolve, reject)=>{
            this.storage.del(filePath, (err)=>{
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

    async deleteFileByPrefix(filePath){
        const DelOp = (key)=>({type: 'del', key: key});
        let fileList = await this.getFileList(filePath);
        let delFileOps = fileList.map(f=>DelOp(f));
        return await this.batch(delFileOps);
    }

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
                    console.error(err);
                    reject('error getFileList') ;
                });
        });
    }
    /**
     * @async
     * @param  {} filePath
     */
    async readFile(filePath){
        let item = await this.getItem(filePath);
        return item[filePath];
    }
    /**
     * @param  {} filePath
     * @param  {} data
     */
    async writeFile(filePath, data){
        return await this.setItem(filePath, data);
    }

    async deleteFile(filePath){
        return await this.delItem(filePath);
    }

    async fetchFile(url, filePath){
        let response = await Fetch.fetchData(url);
        return await this.writeFile(filePath, response);
    }

    async streamFile(url, filePath, transformer=null){
        throw Error('implement required');
    }
}

export default new IndexDBStorage();