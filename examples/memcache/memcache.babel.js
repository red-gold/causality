import {MemDownCache} from 'causal-net.memcache';
import {Logger} from 'causal-net.log';

(async ()=>{
    await MemDownCache.setItem(123, '1223adfa');
    Logger.log({getItem: await MemDownCache.getItem(123)});
})();
