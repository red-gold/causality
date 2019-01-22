import {Datasets, Log, Utils} from '../../src/index';
const { MNIST } = Datasets;
const { Logger } = Log;
const { Fetch } = Utils;
const mnist = async ()=>{
    const datasetUrl = "http://storage.googleapis.com/moderatordev-223307.appspot.com/MNIST_dataset/";
    const url = `${datasetUrl}dataset.summary.json`;
    const configure = await Fetch.fetchJson(url);
    configure.datasetUrl = datasetUrl;
    let mnist = new MNIST(configure);
    mnist.Logger = Logger;
    Logger.log(mnist.summary());
    let chunkStorage = await mnist.fetchDataset('/mnist/',2);
    Logger.log({chunkStorage});
    let stream = mnist.makePreprocessingStream();
    let preprocessingStorage = await mnist.preprocessingDataset(stream);
    Logger.log({preLen: preprocessingStorage.length});
    let [trainSet, testSet] = mnist.getTrainTestSet();
    Logger.log({trainLen: trainSet.length, testSet: testSet.length});
    let trainGenerator = mnist.makeSampleGenerator(trainSet, 10);
    for await (let {idx, batchSize, data} of trainGenerator) {
        let [sample, label]= data;
        Logger.log({lenSample: sample.length});
        Logger.log({lenLabel: label.length});
    }
};
mnist().catch(err=>{
    console.log({err});
});