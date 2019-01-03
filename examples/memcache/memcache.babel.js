import {MemoryCache} from 'causal-net.memcache';
import {TermLog} from 'causal-net.log';

(async ()=>{
    const logger = new TermLog(['prefix1']);
    var memoryCache = new MemoryCache();
    await memoryCache.setItem(123, '1223adfa');
    logger.log({getItem: await memoryCache.getItem(123)});
})();
