import { universalEmbedding, Log } from 'causal-net.representation';
import { termLogger } from 'causal-net.log';
import { Fetch } from 'causal-net.utils';
var fetch = Fetch.fetch;
(async ()=>{
    termLogger.log({universalEmbedding});
    await universalEmbedding.connect();
    termLogger.log(await universalEmbedding.sentenceEncode([ ['this', 'is', 'test'] ]));
})();