import { universalEmbedding } from 'causal-net.representation';
import { termLogger } from 'causal-net.log';

const compareSentences = async (sentenceA, sentenceB)=>{
    termLogger.groupBegin('compare sentences');
    let resultScore = await universalEmbedding.encodeMatching( sentenceA , sentenceB );
    let matchScore = await resultScore.data();
    termLogger.log({'matching score': matchScore[0], sentenceA, sentenceB});
    termLogger.groupEnd();
};

$('#compare-text').click((event)=>{
    event.preventDefault(); 
    let sentenceA = $('#sentenceA').val();
    let sentenceB = $('#sentenceB').val();
    compareSentences(sentenceA.trim(), sentenceB.trim());
});

(async ()=>{
    termLogger.connect(document.getElementById('logger'));
    termLogger.groupBegin('loading model from google tensorflow.hub');
    universalEmbedding.connect().then(()=>{
        termLogger.groupEnd();
    });
})();