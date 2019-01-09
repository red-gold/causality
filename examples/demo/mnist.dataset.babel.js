import {CausalNet} from '../../src/index';
import {MNIST} from 'causal-net.datasets';
import {TermLog} from 'causal-net.log';
import {Fetch} from 'causal-net.utils';
const _NetConfig = {
    HyperParameters: {Datasize:10},
    Pipeline:[
        {   Name: 'input', Type: 'tensor', Input: 'PipeInput', 
            Flow:[  {Op: 'tensor', Args:[]},
                    {Op: 'reshape', Args:[['$Datasize', 28, 28, 4]] } ] 
        },
        {   Name:'conv1', Type: 'tensor', Input: 'input',
            Parameters: { Kernel: [3, 3, 4, 32] },
            Flow: [ { Op: 'conv2d', Parameter: 'Kernel', Args: [1, 'same'] } ] 
        },
        {   Name:'conv2', Type: 'tensor', Input: 'conv1',
            Parameters: { Kernel: [3, 3, 32, 32] },
            Flow: [ { Op: 'conv2d', Parameter: 'Kernel', Args: [1, 'same'] },
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
    let trainGenerator = mnist.makeTrainSampleGenerator(trainSet, 10);
    let causalNet = new CausalNet(_NetConfig, parameters, mnist.storage);
    const DoBatchSampleGenerator = (batchSize)=>{return mnist.makeTrainSampleGenerator(trainSet, batchSize);};
    let logTrain = await causalNet.train(DoBatchSampleGenerator, 10);
    logger.logger(logTrain);
})();


