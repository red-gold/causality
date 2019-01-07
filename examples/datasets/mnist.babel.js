const { MNIST } = require('causal-net.datasets');
const { TermLog } = require('causal-net.log');
const { Fetch } = require('causal-net.utils');
(async ()=>{
    const logger = new TermLog();
    const url = 'https://raw.githubusercontent.com/red-gold/causality/wip/datasets/MNIST_dataset/dataset.summary.json';
    const configure = await Fetch.fetchJson(url);
    configure.datasetUrl = 'https://raw.githubusercontent.com/red-gold/causality/wip/datasets/MNIST_dataset/';
    // logger.log(configure);
    let mnist = new MNIST(configure);
    logger.log(mnist.summary());
    // await mnist.fetchDataset();
    // let dataset = await mnist.loadDataset();
    // let [dataBuffer, labelBuffer] = dataset;
    // logger.log({dataLen: dataBuffer.length, labelLen: labelBuffer.length});
    // let normalizeDataset = await mnist.preprocessingDataset();
    // logger.log({normalizeDataset});
})();

// const [trainIdxSet, testIdxSet] = mnist.getTrainTestSet(99);
// console.log({lenTrain: trainIdxSet.length, lenTest: testIdxSet.length});
// const batchSampleGenerator = mnist.getSampleGenerator(trainIdxSet, 10);
// for(let batch of batchSampleGenerator){
//     console.log({datalen: batch[0].length, labellen: batch[1].length});
// }