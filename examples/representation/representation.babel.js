import { Representation, Log } from '../../src/index';
const { termLogger } = Log;
const { causalNetWordVec } = Representation;
(async ()=>{
    termLogger.log({causalNetWordVec});
    let wordEmbedding = await causalNetWordVec.EN;
    termLogger.log(await wordEmbedding.transform(['thisthissupportnotbefound', 'is', 'test']));
})();