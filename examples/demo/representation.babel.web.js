import { universalEmbedding } from 'causal-net.representation';
// import { termLogger } from 'causal-net.log';
(async ()=>{
    // termLogger.groupBegin();
    await universalEmbedding.connect();
    // termLogger.groupEnd();
    // let sentVec = await universalEmbedding.sentenceEncode([ 'this is test' ]);
    // sentVec.print();
    // let diffScore = await universalEmbedding.encodeMatching( 'this is a good day' , 'this is a terrible day' );
    // diffScore.print();  
})();
$('#compare-text').click(function(){

});
$( document ).ready(function() {
    console.log( "ready!" );
});