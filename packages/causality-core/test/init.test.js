//TODO: wip
function before_each(){
    const {Tensor, PipelineLayer} = require('../index.js');
    var tf = Tensor
}



function layerShouldSuccess1(){
    var R = require('ramda');
    const {Tensor, PipelineLayer} = require('../index.js');
    const layerConfig = {Name: 'input', Type: 'tensor', Input: 'PipelineInput',  Output: 'batch', 
                        Flow:[ {Op: 'tensor', Args:[]},
                               {Op: 'reshape', Args:[[2, 2, 2, 2]] } ] 
                    };
    const layerParameter = {'input':{}};
    let val = R.range(0, 2*2*2*2);
    console.log(PipelineLayer(val, layerConfig, layerParameter, (msg)=>console.log(msg)));
}
// layerShouldSuccess1();
function layerShouldSuccess2(){
    var R = require('ramda');
    const {Tensor, PipelineLayer} = require('../index.js');
    var T = Tensor;
    const layerConfig = {Name:'conv1', Type: 'tensor', Input: 'batch', Output: 'conv2',
                            HyperParameters: {Weigth: 3, Height: 3, Strides: 1, Depth: 32},
                            Parameters: { Kernel: [3, 3, 2, 32] },
                            Flow: [{ Op: 'conv2d', Parameter: 'Kernel', Args: [1, 'same'] },
                                   { Op: 'tanh', Args: [] } 
                            ] };
    const layerParameter = {Kernel:T.variable(T.tensor(R.range(0, 3*3*2*32), [3, 3, 2, 32]))};
    let val = T.tensor(R.range(0, 10*12*12*2), [10, 12, 12, 2]);
    console.log(PipelineLayer(val, layerConfig, layerParameter, (msg)=>console.log(msg)));
}
// layerShouldSuccess2();

function PipelineShouldSuccess(){
    var R = require('ramda');
    const {Tensor, PipelineLayer, ParameterAcquisition} = require('../index.js');
    var T = Tensor;
    const _NetConfig = {
                    HyperParameters: {DataSize},
                    Pipeline:[
                        {   Name: 'input', Type: 'tensor', Input: 'PipelineInput', 
                            Flow:[  {Op: 'tensor', Args:[]},
                                    {Op: 'reshape', Args:[[$DataSize, 12, 12, 2]] } ] 
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
    const NetConfig = ParameterAcquisition(_NetConfig);
    let val =  { PipelineInput: R.range(0, 10*12*12*2) };
    let pars = { conv1: { Kernel:T.variable(T.tensor(R.range(0, 3*3*2*32), [3, 3, 2, 32])) }, 
                 conv2: { Kernel:T.variable(T.tensor(R.range(0, 3*3*32*32), [3, 3, 32, 32])) },
                 dense: { Weight:T.variable(T.tensor(R.range(0, 12*12*32*10), [12*12*32, 10])),
                          Bias: T.variable(T.tensor(R.range(0, 10), [10])) } };
    let traces = [];
    H(NetConfig.HyperParameters)
    for(let layer of NetConfig.Pipeline){
        let layerOutput = PipelineLayer(val[layer.Input], layer, pars[layer.Name], ()=>{});
        val[layer.Name] = layerOutput[layer.Name];
        traces.push({[layer.Name]: layerOutput.trace});
        console.log({traces});
    }
}

// PipelineShouldSuccess();

function ParameterAcquiseShoudSuccess(){
    var R = require('ramda');
    const {Tensor, PipelineLayer, ParameterAcquisition} = require('../index.js');
    var T = Tensor;
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
    const NetConfig = ParameterAcquisition(_NetConfig);
    console.log(NetConfig);
}
ParameterAcquiseShoudSuccess();
