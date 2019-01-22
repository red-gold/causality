import { CausalNet, Storage, Datasets, Log, Utils } from '../../src/index';
const { MNIST }  = Datasets;
const { Logger } = Log;
const _NetConfig = {
    HyperParameters: {Datasize:100},
    Pipeline:[
        {   Name: 'input', Type: 'tensor', Input: 'PipeInput', 
            Flow:[  {Op: 'reshape', Args:[['$Datasize', 28, 28, 4]] } ] 
        },
        {   Name:'conv1', Type: 'tensor', Input: 'input',
            Parameters: { filter: [3, 3, 4, 32] },
            Flow: [ { Op: 'conv2d', Parameter: 'filter', Args: [1, 'same'] } ] 
        },
        {   Name:'conv2', Type: 'tensor', Input: 'conv1',
            Parameters: { filter: [3, 3, 32, 32] },
            Flow: [ { Op: 'conv2d', Parameter: 'filter', Args: [1, 'same'] },
                    { Op: 'reshape', Args: [['$Datasize', -1]] },
                    { Op: 'tanh', Args: [] } ] 
        },
        {   Name:'dense', Type: 'tensor', Input: 'conv2',
            Parameters: { Weight: [28*28*32, 10], Bias: [10]  },
            Flow: [ { Op: 'dot', Parameter: 'Weight', Args: [] },
                    { Op: 'add', Parameter: 'Bias',  Args: [] } ] 
        },
        {   Name:'PipeOutput', Type: 'tensor', Input: 'dense',
            Flow: [ { Op: 'reshape', Args: [['$Datasize', -1]] } ] 
        } ] };
let configure = require('../../datasets/MNIST_dataset/dataset.summary.json');
Logger.log(configure);
(async ()=>{
    configure.datasetUrl = "http://storage.googleapis.com/moderatordev-223307.appspot.com/MNIST_dataset/";
    let mnist = new MNIST(configure);
    Logger.log(mnist.summary());
    let chunkStorage = await mnist.fetchDataset('/mnist/', 1);
    Logger.log({chunkStorage});
    let stream = mnist.makePreprocessingStream();
    let preprocessingStorage = await mnist.preprocessingDataset(stream, true);
    Logger.log({preprocessingStorage});
    let parameters = {};
    let causalNet = new CausalNet(_NetConfig, parameters);
    let [trainSet, testSet] = mnist.getTrainTestSet();
    causalNet.logger = Logger;    
    const DoBatchTrainSampleGenerator = (batchSize)=>{return mnist.makeSampleGenerator(trainSet, batchSize);};
    let logTrain = await causalNet.train(DoBatchTrainSampleGenerator, 90, 20, 0.005);
    Logger.log(logTrain);
    const DoBatchTestSampleGenerator = (batchSize)=>{return mnist.makeSampleGenerator(testSet, batchSize);};
    let testResult = await causalNet.test(DoBatchTestSampleGenerator, testSet.length);
    Logger.log({testResult});
    await causalNet.saveParams('save_model.model');
    await causalNet.loadParams('save_model.model');
    testResult = await causalNet.test(DoBatchTestSampleGenerator, testSet.length);
    Logger.log({testResult});
    testResult = await causalNet.ensembleTest(DoBatchTestSampleGenerator, ['save_model.model'], testSet.length);
    Logger.log({testResult});
})();