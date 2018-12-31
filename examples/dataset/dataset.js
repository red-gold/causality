const { MnistDataset } = require('causal-net-dataset');
const { MemoryCache } = require('causal-net-memcache');

let mnist = new MnistDataset();
let memoryCache = new MemoryCache();
mnist.fetchDataset();
console.log('this is the text');
// mnist.makeSummary();
// mnist.loadDatasetSync(memoryCache);

const [trainIdxSet, testIdxSet] = mnist.getTrainTestSet(99);
console.log({lenTrain: trainIdxSet.length, lenTest: testIdxSet.length});
const batchSampleGenerator = mnist.getSampleGenerator(trainIdxSet, 10);
for(let batch of batchSampleGenerator){
    console.log({datalen: batch[0].length, labellen: batch[1].length});
}