import {CausalNet} from '../../src/index';
import {MNIST} from 'causal-net.datasets';
import {Logger} from 'causal-net.log';
import {Fetch} from 'causal-net.utils';
const _NetConfig = {
    HyperParameters: {Datasize:10},
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

let parameters = {};
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
    let causalNet = new CausalNet(_NetConfig, parameters, mnist.storage);
    const DoBatchTrainSampleGenerator = (batchSize)=>{return mnist.makeSampleGenerator(trainSet, batchSize);};
    let logTrain = await causalNet.train(DoBatchTrainSampleGenerator, 10, 25, 0.005);
    Logger.log(logTrain);
    const DoBatchTestSampleGenerator = (batchSize)=>{return mnist.makeSampleGenerator(testSet, batchSize);};
    let testResult = await causalNet.test(DoBatchTestSampleGenerator, testSet.length);
    Logger.log({testResult});
    Logger.log(await causalNet.saveParams('saveDemo.model'));
    Logger.log(await causalNet.loadParams('saveDemo.model'));
})();


