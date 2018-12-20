var {Function, Layer} = require('causal-net-core');
const F = new Function();
const L = new Layer();
const R = F.coreFn;
const T = L.coreTs;
const _NetConfig = {
    HyperParameters: {Datasize:10},
    Pipeline:[
        {   Name: 'input', Type: 'tensor', Input: 'PipelineInput', 
            Flow:[  {Op: 'tensor', Args:[]},
                    {Op: 'reshape', Args:[['$Datasize', 12, 12, 2]] } ] 
        },
        {   Name:'conv1', Type: 'tensor', Input: 'input',
            Parameters: { Kernel: [3, 3, 2, 32] },
            Flow: [ { Op: 'conv2d', Parameter: 'Kernel', Args: [1, 'same'] } ] 
        },
        {   Name:'conv2', Type: 'tensor', Input: 'conv1',
            Parameters: { Kernel: [3, 3, 32, 32] },
            Flow: [ { Op: 'conv2d', Parameter: 'Kernel', Args: [1, 'same'] },
                    { Op: 'reshape', Args: [[10, -1]] },
                    { Op: 'tanh', Args: [] } ] 
        },
        {   Name:'dense', Type: 'tensor', Input: 'conv2',
            Parameters: { Weight: [12*12*32, 10], Bias: [10]  },
            Flow: [ { Op: 'dot', Parameter: 'Weight', Args: [] },
                    { Op: 'add', Parameter: 'Bias',  Args: [] } ] 
        } ] };
const pipeline = F.parameterAcquisition(_NetConfig.Pipeline, _NetConfig.HyperParameters);
console.log(pipeline);
var par = L.setOrInitParams(_NetConfig.Pipeline, {});
// console.log(par.conv1.Kernel);
console.log('..........................');
console.log(F.isTensor(par.conv1.Kernel));
