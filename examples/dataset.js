var data = require('causal-net-dataset');
const {MemoryCache} = require('causal-net-memcache');
console.log({data});
let mnist = new data.MnistDataset();
let memoryCache = new MemoryCache();
console.log({mnist});
mnist.loadDatasetSync(memoryCache);
