import {WordEmbedding} from 'causal-net.representation';
import {TermLog} from 'causal-net.log';
let logger = new TermLog();
(async ()=>{
    logger.log({WordEmbedding});
    let embedding = new WordEmbedding();
    logger.log(await embedding.transform('this is test'));
})();