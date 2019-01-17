import BaseMemCache from './baseMemCache';
import levelup from 'levelup';
import memdown from 'memdown';

class MemoryCache extends BaseMemCache{
    constructor(zone){
        super(zone);
        this.cache = levelup(memdown());        
    }
    async getItem(key, asBuffer=false){
        return new Promise((resolve, reject)=>{
            this.cache.get(key, {asBuffer}, (err, data)=>{
                if(err){
                    reject('error write');
                }
                else{
                    resolve({[key]: data});
                }
            });
        });
    }
    
    async setItem(key, data){
        return new Promise((resolve, reject)=>{
            this.cache.put(key, data, (err)=>{
                if(err){
                    reject('error write');
                }
                else{
                    resolve({[key]: data});
                }
            });
        });
    }

    async getFileList(filePath='/'){
        const CreateNameTest = (name)=>{
            var pattern = name;
            var regex = new RegExp(`^${pattern}.*`,'g');
            return (fileName)=>fileName.match(regex) || [];
        };
        const NameTester = CreateNameTest(filePath);

        return new Promise(async (resolve, reject)=>{
            let fileList = [];
            this.cache.createKeyStream()
                .on('data', (key) =>{
                    key = key.toString('utf8');
                    // console.log('key=',filePath, NameTester(key));
                    if(NameTester(key).length===1){
                        fileList.push(key);
                    }
                })
                .on('error', (err) =>{
                    console.log('Oh my!', err);
                    reject(err);
                })
                .on('close', () =>{
                    console.log('Stream closed');
                    resolve(fileList);
                })
                .on('end',  () =>{
                    console.log('Stream ended');
                    resolve(fileList);
                });
        });
    }
}

const MemDownCache = new MemoryCache();
export default MemDownCache;