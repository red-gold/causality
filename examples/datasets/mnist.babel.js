const { MNIST } = require('causal-net.datasets');
const { TermLog } = require('causal-net.log');
const { Fetch } = require('causal-net.utils');
(async ()=>{
    const logger = new TermLog();
    const url = 'https://raw.githubusercontent.com/red-gold/causality/wip/datasets/MNIST_dataset/dataset.summary.json';
    const configure = await Fetch.fetchJson(url);
    configure.datasetUrl = 'https://raw.githubusercontent.com/red-gold/causality/wip/datasets/MNIST_dataset/';
    let mnist = new MNIST(configure);
    logger.log(mnist.summary());
    let chunkStorage = await mnist.fetchDataset();
    logger.log({chunkStorage});
    let stream = mnist.makePreprocessingStream();
    let preprocessingStorage = await mnist.preprocessingDataset(stream);
    logger.log({preLen: preprocessingStorage.length});
    let [trainSet, testSet] = mnist.getTrainTestSet();
    logger.log({trainLen: trainSet.length, testSet: testSet.length});
    
    
    // logger.log({normalizeDataset});
})();