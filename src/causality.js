var isNode = require('is-node');

if(isNode){
    var R = require('ramda');
    var fs = require('fs-extra');
    var {PIDExport, BufferToImg} = require('./utils.js');
    PIDExport();
    // var tf = require('@tensorflow/tfjs');
    // require('@tensorflow/tfjs-node');
    var {Tensor, PipelineLayer} = require('causality-core');
    var tf = Tensor;
}
// class Causality extends BaseModel{
class Causality{
    constructor( Config={
                            PipelineInput: 'input',
                            PipelineOuput: 'output',
                            Pipeline:{ 
                                'input': { Type: 'tensor', Input: 'PipelineInput',  Output: 'batch', 
                                    HyperParameters:[['reshape'],[null, 28, 28, 4]] },
                                'batch': { Type: 'preprocessing/subsampling', 
                                    Input: 'batch', Output: 'conv1', 
                                    HyperParameters:{ Size: []} },
                                'conv1': { Type: 'conv', 
                                    Input: 'batch', Output: 'conv2', 
                                    HyperParameters: { Width: 3, Height: 3, Strides: 1, Depth: 32, Activation: 'tanh' }  },
                                'conv2': { Type: 'conv', 
                                    Input: 'conv1', Output: 'output', 
                                    HyperParameters: { Width: 3, Height: 3, Strides: 1, Depth: 32, Activation: 'tanh'} },
                                'output': { Type: 'dense', 
                                    Input: 'conv2', Output: 'PipelineOutput', 
                                    HyperParameters: { Size: [10], Activation:  'tanh' } } } 
                        } ){
        // super.constructor();
        console.log(Config);
        const [size, height, width, depth] = Config.Pipeline[Config.PipelineInput].HyperParameters.Size;
        const [labelSize] = Config.Pipeline[Config.PipelineOuput].HyperParameters.Size;
        this.dataImgW = height;
        this.dataImgH = width;
        this.dataImgD = depth;
        
        
        this.labelSize  = labelSize;
        this.conv1 = {w: 4, h: 4, strides: 1, d: 6}
        this.conv2 = {w: 4, h: 4, strides: 1, d: 16}
        this.denseOuput = width*height*this.conv2.d/this.conv2.strides;
        this.params = { 
            conv1: tf.variable(tf.randomNormal([this.conv1.w, this.conv1.h, this.dataImgD, this.conv1.d])),
            conv2: tf.variable(tf.randomNormal([this.conv1.w, this.conv1.h, this.conv1.d, this.conv2.d])),
            // att2: {
            //     weight: tf.variable(tf.randomNormal)
            //     bias:
            // },
            linear: {
                weight: tf.variable(tf.randomNormal([this.denseOuput, this.labelSize])),
                bias: tf.variable(tf.randomNormal([this.labelSize]))
            }
        }
    }

    make_predict(data){
        const [Batch, Width, Height, inputDepth] = data.shape;
        const {conv1, conv2, linear} = this.params;
        if(inputDepth !== this.dataImgD){
            throw Error(`data depth ${inputDepth} much be ${this.dataImgD}`);
        }
        return tf.tidy(()=>{
            let layer1 = tf.conv2d(data, conv1, 1, 'same');  
            let layer2 = tf.conv2d(layer1, conv2, 1, 'same');
            // let layer2$split  = layer2.split(2,3);
            // let layer2$flatten = tf.concat(layer2$split, 3).reshape([Batch, this.denseOuput]).sigmoid();
            let layer2$flatten = layer2.reshape([Batch, this.denseOuput]).tanh();
            let layerOuput = layer2$flatten.dot(linear.weight).add(linear.bias);
            let logProb = layerOuput.sub(tf.logSumExp(layerOuput, 1, true));
            let predict = logProb.argMax(1);
            return {logProb, predict};
        });
    }

    loss(data, encodeLabels, log=null){
        const {logProb} = this.make_predict(data, log);
        const likelihood = logProb.neg().mul(encodeLabels);
        const loss = likelihood.mean();
        if(log){ log({shape: data.shape[0]}); };
        return loss;
    };

    train(data, labels, numEpoch=30, lr=0.01, batch=10000){
        const optimizer = tf.train.adam(lr);
        const [S, W, H, D] = data.shape;
        const numBatch = S/batch;//mod
        const start = new Date();
        let loss = [], averageLoss = [];
        const numIters = numEpoch*numBatch;
        for(let iter of R.range(0, numIters)){
            const batchIdx = iter%numBatch;
            const epochIdx = (iter/numBatch)>>1<<1;
            const batchData = data.slice([batchIdx*batch], [batch]);
            const batchLabels = labels.slice([batchIdx*batch], [batch]);
            // batchData.slice(0).mean().print();
            // BufferToImg(batchData.slice(0).dataSync(), W, H, '01.png');
            // BufferToImg(batchData.slice(1).dataSync(), W, H, '02.png');
            // batchData.slice(1).mean().print();
            batchLabels.argMax(1).print();
            optimizer.minimize(()=>{
                let l = this.loss(batchData, batchLabels, (msg)=>{console.log(msg)});
                [loss, averageLoss] = (batchIdx===0)?[[], [...averageLoss, R.mean(loss)]]:[[...loss, ...l.dataSync()], averageLoss];
                console.log({[epochIdx+'/'+batchIdx]: loss, averageLoss, 
                             time: new Date().toISOString(), start: start.toISOString(),
                             numBatch, numEpoch, elapse: (new Date() - start)/1000});
                return l;
            });
        }
    };
    test(testData, testLabels){
        let {predict} = this.make_predict(testData);
        predict = predict.dataSync();
        let corrects = testLabels.map((testLabel,idx)=>{
            return testLabel === predict[idx];
        });
        return {corect: R.sum(corrects), total: testLabels.length};
    }
    async get_params(){
        const w = await Promise
                    .all(R.map((v)=>v.data())
                        (R.values(this.params)));
        return R.fromPairs(R.__)
                    (R.addIndex(R.map)
                        ((k,i)=>[k, w[i]])(R.keys(this.params)));
    }
    async save_params(fileName){
        const w = await this.get_params();
        console.log(w);
        return fs.writeJSON(fileName, w);
    }
}

// if(typeof require !== 'undefined' && require.main === module){
//     const { MnistData } = require('./datasets/mnist.js');
//     function DumyDataTest(){
//         let trainData = tf.tensor([0.9, 1, 0.2, 1, 1, 1, 0, 1, 0,
//                                 0.9, 1, 0.2, 1, 1, 1, 0, 1, 0], shape=[2,3,3,1]);
//         let testData = tf.tensor([0.9, 1, 0.2, 1, 1, 1, 0, 1, 0,
//                                 0.9, 1, 0.2, 1, 1, 1, 0, 1, 0], shape=[2,3,3,1]);                          
//         const LabelsEncode = (labels)=>tf.oneHot(tf.tensor1d(labels, 'int32'), 2).cast('float32');
//         let trainEncodeLabels = LabelsEncode([1,0]);
//         let testLabels = [0,1];
//         let causality = new Causality();
//         (()=>{
//             let {logProb, predict} = causality.make_predict(testData);
//             logProb.print();
//             predict.print();
//         })();
//         causality.train(trainData, trainEncodeLabels);
//         let {predict} = causality.make_predict(testData);
//         predict.print();
//         const testResuls = causality.test(testData, testLabels);
//         console.log(testResuls);
//     }    
//     // DumyDataTest();
//     function MnistTest(){
//         let mnistData = new MnistData();
//         let data = mnistData.loadDataSync();
//         let labels = mnistData.loadLabelSync();
//         const W = mnistData.IMAGE_W;
//         const H = mnistData.IMAGE_H;
//         const D = 4;
//         console.log({dataL: data.length, labesL: labels.length});
//         let [_trainData, _testData] = R.splitAt(60000*W*H*D)(data);
//         let [_trainLabels, _testLabels] = R.splitAt(60000*10)(labels);
//         let trainData = tf.tensor(_trainData).reshape([60000,W,H,D]);
//         let testData = tf.tensor(_testData, [5000, W, H, D]);                          
//         // const LabelsEncode = (labels)=>tf.oneHot(tf.tensor1d(labels, 'int32'), 2).cast('float32');
//         let trainEncodeLabels = tf.tensor(_trainLabels, [60000, 10]);
//         let testLabels = tf.argMax(tf.tensor(_testLabels, [5000, 10]), 1).dataSync();
//         let causality = new Causality();
//         (()=>{
//             let {logProb, predict} = causality.make_predict(testData);
            
//             let labelStat = predict.dataSync().reduce((labelStat, l)=>{
//                 labelStat[l] = +labelStat[l]+1;
//                 return labelStat;
//             }, {...R.range(0, 10).map(d=>0)});
//             console.log({labelStat})
//         })();
//         // return;
//         causality.train(trainData, trainEncodeLabels);
//         let {predict} = causality.make_predict(testData);
//         let labelStat = predict.dataSync().reduce((labelStat, l)=>{
//             labelStat[l] = +labelStat[l]+1;
//             return labelStat;
//         }, {...R.range(0, 10).map(d=>0)});
//         console.log({labelStat})
//         const testResuls = causality.test(testData, testLabels);
//         console.log(testResuls);
//     }
//     MnistTest();
// }