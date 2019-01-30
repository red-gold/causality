import {WordEmbedding} from 'causal-net.representation';
const { causalNetWordVec } = WordEmbedding;
import {TermLog} from 'causal-net.log';
let logger = new TermLog();
(async ()=>{
    logger.log({causalNetWordVec});
    logger.log(await causalNetWordVec.transform('this is test'));
})();