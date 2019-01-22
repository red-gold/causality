import { CausalNet, Log } from '../../src/index';
const { Logger } = Log;
let inputs = [[0.52, 1.12,  0.77],
              [0.88, -1.08, 0.15],
              [0.52, 0.06, -1.30],
              [0.74, -2.49, 1.39]];
let targets = [[0, 1], [0, 1], [0, 1], [0, 1]];
const _NetConfig = {
    HyperParameters: {BatchSize:4},
    Classes: 2,
    Pipeline:[
        {   Name: 'input', Type: 'tensor', 
            Flow:[  {Op: 'reshape', Args:[['$BatchSize', 3]] } ] 
        },
        {   Name:'dense', Type: 'tensor', 
            Parameters: { Weight: [3, 2], Bias: [2]  },
            Flow: [ { Op: 'dot', Parameter: 'Weight', Args: [] },
                    { Op: 'add', Parameter: 'Bias',  Args: [] } ] 
        },
        {   Name:'PipeOutput', Type: 'tensor', 
            Flow: [ { Op: 'reshape', Args: [['$BatchSize', -1]] } ] 
        } ] };
let parameters = {};
let causalNet = new CausalNet(_NetConfig, parameters);
causalNet.logger = Logger;

(async ()=>{
    const DoBatchTrainSampleGenerator = (epochIdx)=>([{idx:0, batchSize:4, data: [inputs, targets]}]);
    let logTrain = await causalNet.train(DoBatchTrainSampleGenerator, 20);
    Logger.log(logTrain);
    const DoBatchTestSampleGenerator = ()=>([{idx:0, batchSize:4, data: [inputs, targets]}]);
    let testResult = await causalNet.test(DoBatchTestSampleGenerator);
    Logger.log({testResult});
    await causalNet.saveParams('save_model.model');
    await causalNet.loadParams('save_model.model');
    testResult = await causalNet.test(DoBatchTestSampleGenerator);
    Logger.log({testResult});
    testResult = await causalNet.ensembleTest(DoBatchTestSampleGenerator, ['save_model.model']);
    Logger.log({testResult});
    testResult = await causalNet.ensembleTest(DoBatchTestSampleGenerator, ['save_model.model']);
    Logger.log({testResult});
})();