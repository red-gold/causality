var data = require('causal-net-dataset');
const {MemoryCache} = require('causal-net-memcache');
console.log({data});
let mnist = new data.MnistDataset();
let memoryCache = new MemoryCache();
console.log({mnist});
mnist.loadDatasetSync(memoryCache);

const [trainIdxSet, testIdxSet] = mnist.getTrainTestSet(99);
console.log({lenTrain: trainIdxSet.length, lenTest: testIdxSet.length});
const batchSampleGenerator = mnist.getSampleGenerator(trainIdxSet, 10);
for(let batch of batchSampleGenerator){
    console.log({datalen: batch[0].length, labellen: batch[1].length});
}