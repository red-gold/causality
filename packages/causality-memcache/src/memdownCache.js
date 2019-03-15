import { platform } from 'causal-net.utils';
import { Store as BaseMemCache } from 'causal-net.core';
import { default as MemorizingMixins } from './memorizing.mixins';
/**
 * This MemdownCache provide memcache implement based on 
 * [memdown](https://www.npmjs.com/package/memdown)
 * { mixWith: [ MemorizingMixins ] }
 * @class MemoryCache
 * @extends BaseMemCache
 */
class MemdownCache extends platform.mixWith( BaseMemCache,
    [ MemorizingMixins ]){
    constructor(){
        super();
        this.connect();
    }
    /**
     * Connect to database, this function shall be call when construct instance
     * @memberof MemdownCache
     */
    connect(){
        let memdown = require('memdown');
        this.store = this.levelup(memdown());        
    }
}

export default new MemdownCache();