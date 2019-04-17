import { universalEmbedding } from 'causal-net.representation';
import { causalNetSGDOptimizer } from 'causal-net.optimizers';
import { causalNetModels } from 'causal-net.models';
import { causalNetParameters, causalNetLayers } from 'causal-net.layer';
import { causalNetDataSource } from 'causal-net.datasets';
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
    termLogger.connect('#logger');
    termLogger.groupBegin('loading model from google tensorflow.hub');
    await universalEmbedding.connect();
    let sentVec = await universalEmbedding.sentenceEncode([ 'this is' ]);
    sentVec.print();
    termLogger.groupEnd();
    
})();