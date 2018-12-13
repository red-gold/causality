var isNode = require('is-node');

if(isNode){
    var R = require('causality-core');
    
}
function MnistTraining(){
    
    let mnistData = new MnistData();
    let data = mnistData.loadDataSync();
    let labels = mnistData.loadLabelSync();
    const W = mnistData.IMAGE_W;
    const H = mnistData.IMAGE_H;
    const D = 4;
    console.log({dataL: data.length, labesL: labels.length});
    let [_trainData, _testData] = R.splitAt(60000*W*H*D)(data);
    let [_trainLabels, _testLabels] = R.splitAt(60000*10)(labels);
    let trainData = tf.tensor(_trainData).reshape([60000,W,H,D]);
    let testData = tf.tensor(_testData, [5000, W, H, D]);                          
    // const LabelsEncode = (labels)=>tf.oneHot(tf.tensor1d(labels, 'int32'), 2).cast('float32');
    let trainEncodeLabels = tf.tensor(_trainLabels, [60000, 10]);
    let testLabels = tf.argMax(tf.tensor(_testLabels, [5000, 10]), 1).dataSync();
    let causality = new Causality();
    (()=>{
        let {logProb, predict} = causality.make_predict(testData);
        
        let labelStat = predict.dataSync().reduce((labelStat, l)=>{
            labelStat[l] = +labelStat[l]+1;
            return labelStat;
        }, {...R.range(0, 10).map(d=>0)});
        console.log({labelStat})
    })();
    // return;
    causality.train(trainData, trainEncodeLabels);
    let {predict} = causality.make_predict(testData);
    let labelStat = predict.dataSync().reduce((labelStat, l)=>{
        labelStat[l] = +labelStat[l]+1;
        return labelStat;
    }, {...R.range(0, 10).map(d=>0)});
    console.log({labelStat})
    const testResuls = causality.test(testData, testLabels);
    console.log(testResuls);
    
}
function test_pipeline(){
    var R = require('ramda');
    const {Tensor, PipelineLayer} = require('../index.js');
    const config = {
                        PipelineInput: 'input',
                        PipelineOuput: 'labelProb',
                        Pipeline:[ 
                            {Name:'input', Type: 'tensor', Input: 'PipelineInput',  Output: 'batch', 
                                        Flow:[
                                            {Op: 'tensor', Args: [] },
                                            {Op: 'reshape', Args: [[60000, 28, 28, 4]] }
                                        ] },
                            {Name:'batch', Type: 'model/subSampling', Input: 'input', Output: 'conv1', 
                                        Flow:[
                                            {Op: 'reshape', Args: [[6, 10000, 28, 28, 4]] },
                                            {Op: 'slice', Args: [[0], [10000]] }
                                        ] },
                            {Name:'conv1', Type: 'tensor', Input: 'batch', Output: 'conv2',
                                        HyperParameters: {Weigth: 3, Height: 3, Strides: 1, Depth: 32},
                                        Parameters: { Kernel: [3, 3, 32] },
                                        Flow: [{ Op: 'conv', Parameter: 'kernel', Args: [1] },
                                               { Op: 'tanh', Args: [] } 
                                        ] },
                            {Name: 'conv2', Type: 'tensor', Input: 'conv1', Output: 'output', 
                                        Parameters: {'kernel': [3, 3, 32] },
                                        Flow: [{ Op: 'conv', Args: [[3, 3, 1, 32]] },
                                               { Op: 'reshape', Args: [[10000, -1]] },
                                               { Op: 'tanh', Args: [] } ] },
                            {Name: 'dense', Type: 'tensor', Input: 'conv2', Output: 'PipelineOuput', 
                                        Parameters: {Weigth: [10000, 28*28*32], Bias: [10000] },
                                        Flow: [{ Op: 'mul', Parameter: 'Weight'  },
                                               { Op: 'add', Parameter: 'Bias' }] }
                        ]   }
    // let val = R.range(0, 2*2*2*2);
    // let par = R.range(0, 2*2*2*2);
    console.log(PipelineLayer(config.Type, val, null, config.Flow, (msg)=>console.log(msg)));
}

    // const {Tensor, PipelineLayer} = require('../index.js');
    // const config = Config={
    //                     PipelineInput: 'input',
    //                     PipelineOuput: ['labelProb', 'labelLogProb'],
    //                     Pipeline:{ 
    //                         input: {  Type: 'tensor', Input: 'PipelineInput',  Output: 'batch', 
    //                                     Flow:[
    //                                         {Op: 'tensor', Args: [] },
    //                                         {Op: 'reshape', Args: [[60000, 28, 28, 4]] }
    //                                     ] },
    //                         batch: {  Type: 'model/subsampling', Input: 'input', Output: 'conv1', 
    //                                     Flow:[
    //                                         {Op: 'reshape', Args: [[6, 10000, 28, 28, 4]] },
    //                                         {Op: 'slice', Args: [[0], [10000]] }
    //                                     ] },
    //                         conv1: {  Type: 'tensor', Input: 'batch', Output: 'conv2',
    //                                     HyperParameters: {Weigth: 3, Height: 3, Strides: 1, Depth: 32},
    //                                     Parameters: {Kernel: T.getOrInit([3, 3, 32]) },
    //                                     Flow: [{ Op: 'conv', Parameter: 'kernel', Args: [1] },
    //                                            { Op: 'tanh', Args: [] } 
    //                                     ] },
    //                         conv2: {  Type: 'tensor', Input: 'conv1', Output: 'output', 
    //                                     Parameters: {'kernel':tf.variable([3, 3, 32])},
    //                                     Flow: [{ Op: 'conv', Args: [[3, 3, 1, 32]] },
    //                                            { Op: 'tanh', Args: [] },
    //                                            { Op: 'reshape', Args: [[10000, -1]] } ] },
    //                         dense: { Type: 'tensor', Input: 'conv2', Output: 'predict', 
    //                                     Flow: [{ Op: 'mul', Args: [] },
    //                                            { Op: 'add', Parameter: 'weigth', Args: [] } ],
    //                         Output: 'PipelineOutput',  
    //                 }
    // let val = R.range(0, 2*2*2*2);
    // let par = R.range(0, 2*2*2*2);
    // console.log(PipelineLayer(config.Type, val, null, config.Flow, (msg)=>console.log(msg)));
}