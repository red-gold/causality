import { universalEmbedding } from 'causal-net.representation';
import { termLogger } from 'causal-net.log';
import { tokenizer } from 'causal-net.preprocessing';
(async ()=>{
    termLogger.groupBegin('load model');
    await tokenizer.connect('http://0.0.0.0:5050/use/vocab.json');
    await universalEmbedding.connect('http://0.0.0.0:5050/use/'+'tensorflowjs_model.json');
    termLogger.log('load finish');
    const asEncode = true;
    let tokens = [tokenizer.tokenize('dog', asEncode),
                  tokenizer.tokenize('cat', asEncode)]; 
    termLogger.log({tokens});
    let sentVec = await universalEmbedding.sentenceEncode(tokens);
    sentVec.print();
    let score = await universalEmbedding.encodeMatching(tokens[0], tokens[1]);
    score.print();
    termLogger.groupEnd();
})().catch(console.err);        