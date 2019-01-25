import {Datasets, Log, Utils} from '../../src/index';
const { MNIST } = Datasets;
const { termLogger } = Log;
const { Fetch } = Utils;
const mnist = async ()=>{
    const datasetUrl = "http://storage.googleapis.com/moderatordev-223307.appspot.com/MNIST_dataset/";
    const url = `${datasetUrl}dataset.summary.json`;
    const configure = await Fetch.fetchJson(url);
    configure.datasetUrl = datasetUrl;
    let mnist = new MNIST(configure);
    mnist.Logger = termLogger;
    termLogger.log(mnist.summary());
    let chunkStorage = await mnist.fetchDataset('/mnist/',2);
    termLogger.log({chunkStorage});
    let stream = mnist.makePreprocessingStream();
    let preprocessingStorage = await mnist.preprocessingDataset(stream);
    termLogger.log({preLen: preprocessingStorage.length});
    let [trainSet, testSet] = mnist.getTrainTestSet();
    termLogger.log({trainLen: trainSet.length, testSet: testSet.length});
    let trainGenerator = mnist.makeSampleGenerator(trainSet, 10);
    for await (let {idx, batchSize, data} of trainGenerator) {
        let [sample, label]= data;
        termLogger.log({lenSample: sample.length});
        termLogger.log({lenLabel: label.length});
    }
};
mnist().catch(err=>{
    console.log({err});
});