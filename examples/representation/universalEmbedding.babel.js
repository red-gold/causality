// import { universalEmbedding } from 'causal-net.representation';
import { termLogger } from 'causal-net.log';
import { causalNetCore } from 'causal-net.core';
(async ()=>{
    termLogger.groupBegin('load model');
    const T = causalNetCore.CoreTensor;
    var model = await T.loadGraphModel('http://0.0.0.0:5050/use/'+'tensorflowjs_model.json');
    // let model = await T.loadGraphModel('http://0.0.0.0:5050/use/'+'tensorflowjs_model.json');
    termLogger.log('load finish');
    let predict = await model.executeAsync({indices: T.tensor([[0,0]]).asType('int32'), values: T.tensor([8]).asType('int32')});
    predict.print();
    termLogger.groupEnd();
    // let sentVec = await universalEmbedding.sentenceEncode([ 'this is test' ]);
    // sentVec.print();
})().catch(console.err);        