import { CausalNet, Storage, Datasets, Log, Utils } from '../../src/index';
const { MNIST }  = Datasets;
const { Logger } = Log;
const _NetConfig = {
    HyperParameters: {Datasize:10},
    Pipeline:[
        {   Name: 'input', Type: 'tensor', 
            Flow:[  {Op: 'reshape', Args:[['$Datasize', 28, 28, 4]] } ] 
        },
        {   Name:'conv1', Type: 'tensor', 
            Parameters: { filter: [3, 3, 4, 32] },
            Flow: [ { Op: 'conv2d', Parameter: 'filter', Args: [1, 'same'] } ] 
        },
        {   Name:'conv2', Type: 'tensor', 
            Parameters: { filter: [3, 3, 32, 32] },
            Flow: [ { Op: 'conv2d', Parameter: 'filter', Args: [1, 'same'] },
                    { Op: 'reshape', Args: [['$Datasize', -1]] },
                    { Op: 'tanh', Args: [] } ] 
        },
        {   Name:'dense', Type: 'tensor', 
            Parameters: { Weight: [28*28*32, 10], Bias: [10]  },
            Flow: [ { Op: 'dot', Parameter: 'Weight', Args: [] },
                    { Op: 'add', Parameter: 'Bias',  Args: [] } ] 
        },
        {   Name:'PipeOutput', Type: 'tensor', 
            Flow: [ { Op: 'reshape', Args: [['$Datasize', -1]] } ] 
        } ] };
let configure = require('../../datasets/MNIST_dataset/dataset.summary.json');
Logger.log(configure);
// Logger.Level = 'log';
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
    causalNet.makeOptimizer('adam', [0.002]);
    let [trainSet, testSet] = mnist.getTrainTestSet();
    causalNet.logger = Logger;    
    let batchSize = 10;
    const MakeBatchTrainSampleGenerator = (epochIdx)=>{return mnist.makeSampleGenerator(trainSet, batchSize);};
    let logTrain = await causalNet.train(MakeBatchTrainSampleGenerator, 20);
    Logger.log(logTrain);
    const MakeBatchTestSampleGenerator = ()=>{return mnist.makeSampleGenerator(testSet, batchSize);};
    let testResult = await causalNet.test(MakeBatchTestSampleGenerator);
    Logger.log({testResult});
    await causalNet.saveParams('save_model.model');
    await causalNet.loadParams('save_model.model');
    testResult = await causalNet.test(MakeBatchTestSampleGenerator);
    Logger.log({testResult});
    testResult = await causalNet.ensembleTest(MakeBatchTestSampleGenerator, ['save_model.model']);
    Logger.log({testResult});
    testResult = await causalNet.test(MakeBatchTestSampleGenerator);
    Logger.log({testResult});
})().catch(e=>{
    console.error(e);
});