import {memDownCache} from 'causal-net.memcache';
import {Logger} from 'causal-net.log';

(async ()=>{
    await memDownCache.setItem(123, '1223adfa');
    Logger.log({getItem: await memDownCache.getItem(123)});
})();
