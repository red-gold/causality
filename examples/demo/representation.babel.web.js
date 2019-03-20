import { universalEmbedding } from 'causal-net.representation';
// import { termLogger } from 'causal-net.log';
(async ()=>{
    // termLogger.groupBegin();
    await universalEmbedding.connect();
    alert('this is test');
    // termLogger.groupEnd();
    let sentVec = await universalEmbedding.sentenceEncode([ 'this is test' ]);
    sentVec.print();
})();