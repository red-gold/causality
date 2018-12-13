var {F, L} = require('causal-net-core');
const f = new F();
var l = new L();
var R = f._;
var T = l.Tensor;
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
        }
]
}
const pipeline = f.parameterAcquisition(_NetConfig.Pipeline, _NetConfig.HyperParameters);
console.log(pipeline);

let val =  { PipelineInput: R.range(0, 10*12*12*2) };
let pars = { conv1: { Kernel:T.variable(T.tensor(R.range(0, 3*3*2*32), [3, 3, 2, 32])) }, 
                conv2: { Kernel:T.variable(T.tensor(R.range(0, 3*3*32*32), [3, 3, 32, 32])) },
                dense: { Weight:T.variable(T.tensor(R.range(0, 12*12*32*10), [12*12*32, 10])),
                        Bias: T.variable(T.tensor(R.range(0, 10), [10])) } };
let traces = [];
for(let layer of pipeline){
    let layerOutput = l.layer(val[layer.Input], layer, pars[layer.Name], ()=>{});
    val[layer.Name] = layerOutput[layer.Name];
    traces.push({[layer.Name]: layerOutput.trace});
    console.log({traces});
};