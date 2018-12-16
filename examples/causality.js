var {CausalNet} = require('../dist/causal-net');
var {Function, Layer} = require('causal-net-core');
const f = new Function();
var l = new Layer();
var R = f.Function;
var T = l.Tensor;
// console.log({CausalNet});
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

let parameters = {  conv1: { Kernel:T.variable(T.tensor(R.range(0, 3*3*4*32), [3, 3, 4, 32])) }, 
                    conv2: { Kernel:T.variable(T.tensor(R.range(0, 3*3*32*32), [3, 3, 32, 32])) },
                    dense: { Weight:T.variable(T.tensor(R.range(0, 28*28*32*10), [28*28*32, 10])),
                             Bias: T.variable(T.tensor(R.range(0, 10), [10])) } };
let causalNet = new CausalNet(_NetConfig, parameters);
let dummyData = R.range(0, 2*28*28*4);
let dummylabel = [[0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0]];
let sampleSize = 2;
console.log({dataLen: dummyData.length});
causalNet.makePredict(dummyData, sampleSize=2);
causalNet.loss(dummyData, dummylabel, sampleSize=2).print();


// var Dataset = require('causal-net-dataset');
// const {MemoryCache} = require('causal-net-memcache');
// console.log({Dataset});
// let mnist = new Dataset.MnistDataset();
// let memoryCache = new MemoryCache();
// console.log({mnist});
// mnist.loadDatasetSync(memoryCache);
// const [trainIdxSet, testIdxSet] = mnist.getTrainTestSet(10);
// console.log({lenTrain: trainIdxSet.length, lenTest: testIdxSet.length});
// const doBatchSampleGenerator = (batchSize)=>{return mnist.getSampleGenerator(trainIdxSet, batchSize);};
// causalNet.train(doBatchSampleGenerator, 2);