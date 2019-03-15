import { memDownCache } from 'causal-net.memcache';
import { termLogger } from 'causal-net.log';
import { causalNetCore } from 'causal-net.core';
(async ()=>{
    const R = causalNetCore.CoreFunction;
    termLogger.Level = 'log';
    termLogger.groupBegin('performance');
    for(let counter of R.range(0, 100)){
        await memDownCache.write(counter, R.range(0, 290));
    }
    termLogger.groupEnd();
    termLogger.log({getItem: await memDownCache.read(199)});
    let memory = await memDownCache.read(99);
    termLogger.log({getItem: memory.length});
})();