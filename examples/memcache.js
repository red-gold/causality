const {MemoryCache} = require('causal-net-memcache');
var memoryCache = new MemoryCache();
console.log({memoryCache});
memoryCache.setItem(123, '1223adfa');
console.log({memoryCache});
console.log({getItem: memoryCache.getItem(123)});