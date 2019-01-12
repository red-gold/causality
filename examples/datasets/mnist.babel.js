const { MNIST } = require('causal-net.datasets');
const { Logger } = require('causal-net.log');
const { Fetch } = require('causal-net.utils');
(async ()=>{
    const url = 'https://raw.githubusercontent.com/red-gold/causality/wip/datasets/MNIST_dataset/dataset.summary.json';
    const configure = await Fetch.fetchJson(url);
    configure.datasetUrl = 'https://raw.githubusercontent.com/red-gold/causality/wip/datasets/MNIST_dataset/';
    let mnist = new MNIST(configure);
    Logger.log(mnist.summary());
    let chunkStorage = await mnist.fetchDataset();
    Logger.log({chunkStorage});
    let stream = mnist.makePreprocessingStream();
    let preprocessingStorage = await mnist.preprocessingDataset(stream);
    Logger.log({preLen: preprocessingStorage.length});
    let [trainSet, testSet] = mnist.getTrainTestSet();
    Logger.log({trainLen: trainSet.length, testSet: testSet.length});
    let trainGenerator = mnist.makeSampleGenerator(trainSet, 10);
    for await (let [sample, label] of trainGenerator) {
        Logger.log({lenSample: sample.length});
        Logger.log({lenLabel: label.length});
    }
})();