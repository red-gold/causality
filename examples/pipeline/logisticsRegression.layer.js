import { Log, Optimizers, CausalNet } from '../../src/index';
const { termLogger } = Log;
const { causalNetSGDOptimizer } = Optimizers;
let inputs = [[0.52, 1.12,  0.77],
              [0.88, -1.08, 0.15],
              [0.52, 0.06, -1.30],
              [0.74, -2.49, 1.39]];
let targets = [[0, 1], [0, 1], [0, 1], [0, 1]];
const DenseLayer = (name, inputSize, outputSize)=>{
        return { 
            Name: name, Type: 'Layer',
            Parameters: { Weight: [inputSize, outputSize], Bias: [outputSize] },
            Net: function(value, params){
                    let {Weight, Bias} = params;
                    let result = value.dot(Weight).add(Bias);
                    return result;
                }
            };
    };
let denseLayer = DenseLayer('dense1', 3, 2);
console.log({denseLayer});
console.log({causalNetSGDOptimizer});
const _NetConfig = {
        HyperParameters: {SampleSize:4},
        Classes: 2,
        Pipeline:[ denseLayer ],
        Trainer: { 
                Optimizer: causalNetSGDOptimizer.adam,  
                OptimizerParameters: { learningRate: 0.01 }
            }
    };
let parameters = {};
let causalNet = new CausalNet(_NetConfig, parameters);
(async ()=>{
    const DoBatchTrainSampleGenerator = (epochIdx)=>([{idx:0, batchSize:4, data: [inputs, targets]}]);
    let logTrain = await causalNet.train(DoBatchTrainSampleGenerator, 20);
    termLogger.log(logTrain);
    const DoBatchTestSampleGenerator = ()=>([{idx:0, batchSize:4, data: [inputs, targets]}]);
    let testResult = await causalNet.test(DoBatchTestSampleGenerator);
    termLogger.log({testResult});
})().catch(err=>{
    console.error({err});
});