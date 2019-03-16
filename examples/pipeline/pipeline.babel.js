import { Log, Layer, CausalNet } from '../../src/index';
const { termLogger } = Log;
const { causalNetLayer } = Layer;
let inputs = [[0.52, 1.12,  0.77],
              [0.88, -1.08, 0.15],
              [0.52, 0.06, -1.30],
              [0.74, -2.49, 1.39]];
let targets = [[0, 1], [0, 1], [0, 1], [0, 1]];
let denseLayer = causalNetLayer.dense('dense1', 3, 2);
console.log({denseLayer});
const _NetConfig = {
    HyperParameters: {SampleSize:4},
    Classes: 2,
    Pipeline:[
        denseLayer,
        {   Name:'PipeOutput', Type: 'Tensor', 
            Flow: [ { Op: 'reshape', Args: [['$SampleSize', -1]] } ] 
        } 
    ] };
let parameters = {};
let causalNet = new CausalNet(_NetConfig, parameters);
(async ()=>{
    let predictResult = await causalNet.predict(inputs, 4);
    termLogger.log({predictResult});
    const DoBatchTrainSampleGenerator = (epochIdx)=>([{idx:0, batchSize:4, data: [inputs, targets]}]);
    let logTrain = await causalNet.train(DoBatchTrainSampleGenerator, 40);
    termLogger.log(logTrain);
    const DoBatchTestSampleGenerator = ()=>([{idx:0, batchSize:4, data: [inputs, targets]}]);
    let testResult = await causalNet.test(DoBatchTestSampleGenerator);
    termLogger.log({testResult});
})().catch(err=>{
    console.error({err});
});