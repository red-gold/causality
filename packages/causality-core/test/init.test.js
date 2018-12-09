//TODO: wip
function before_each(){
    const {Tensor, PipelineLayer} = require('../index.js');
    var tf = Tensor
}

function layer_should_success(){
    var R = require('ramda');
    const {Tensor, PipelineLayer} = require('../index.js');
    const config = { 
                        Type: 'tensor', Input: 'PipelineInput',  Output: 'batch', 
                        Flow:[ {Op: 'tensor', Args:[]},
                               {Op: 'reshape', Args:[[2, 2, 2, 2]] } ] 
                    }
    let val = R.range(0, 2*2*2*2);
    let par = R.range(0, 2*2*2*2);
    console.log(PipelineLayer(config.Type, val, null, config.Flow, (msg)=>console.log(msg)));
}

function mnist_layer_should_success(){
    var R = require('ramda');
    const {Tensor, PipelineLayer} = require('../index.js');
    const config = Config={
                        PipelineInput: 'input',
                        PipelineOuput: 'labelProb',
                        Pipeline:{ 
                            input: {  Type: 'tensor', Input: 'PipelineInput',  Output: 'batch', 
                                        Flow:[
                                            {Op: 'tensor', Args: [] },
                                            {Op: 'reshape', Args: [[60000, 28, 28, 4]] }
                                        ] },
                            batch: {  Type: 'model/subsampling', Input: 'input', Output: 'conv1', 
                                        Flow:[
                                            {Op: 'reshape', Args: [[6, 10000, 28, 28, 4]] },
                                            {Op: 'slice', Args: [[0], [10000]] }
                                        ] },
                            conv1: {  Type: 'tensor', Input: 'batch', Output: 'conv2',
                                        HyperParameters: {Weigth: 3, Height: 3, Strides: 1, Depth: 32},
                                        Parameters: { Kernel: [3, 3, 32] },
                                        Flow: [{ Op: 'conv', Parameter: 'kernel', Args: [1] },
                                               { Op: 'tanh', Args: [] } 
                                        ] },
                            conv2: {  Type: 'tensor', Input: 'conv1', Output: 'output', 
                                        Parameters: {'kernel': [3, 3, 32] },
                                        Flow: [{ Op: 'conv', Args: [[3, 3, 1, 32]] },
                                               { Op: 'tanh', Args: [] },
                                               { Op: 'reshape', Args: [[10000, -1]] } ] },
                            dense: { Type: 'tensor', Input: 'conv2', Output: 'predict', 
                                        Parameters: {Weigth: [3, 3, 32], Bias: [] },
                                        Flow: [{ Op: 'mul', Args: [] },
                                               { Op: 'add', Parameter: 'Bias', Args: [] } ],
                            Output: 'PipelineOutput',  
                    }
    // let val = R.range(0, 2*2*2*2);
    // let par = R.range(0, 2*2*2*2);
    console.log(PipelineLayer(config.Type, val, null, config.Flow, (msg)=>console.log(msg)));
}

layer_should_success()