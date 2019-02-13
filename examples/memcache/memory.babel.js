import { memDownCache } from 'causal-net.memcache';
import { termLogger } from 'causal-net.log';
import { causalNetCore } from 'causal-net.core';
(async ()=>{
    const R = causalNetCore.CoreFunction;
    for(let counter of R.range(0, 100)){
        termLogger.progress({current: counter, total: 99});
        await memDownCache.write(counter, R.range(0, 290));
    }
    termLogger.log({getItem: await memDownCache.read(199)});
    termLogger.log({getItem: await memDownCache.read(99)});
})();