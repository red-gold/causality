import { causalNetEmbedding, Log } from 'causal-net.representation';
import { termLogger } from 'causal-net.log';
(async ()=>{
    const configLink = '../../datasets/WordVec_EN/';
    await causalNetEmbedding.connect(configLink, true);
    let vecs = await causalNetEmbedding.transform(['this', 'is', 'test']);
    for(let vec of vecs){
        console.log({ vec });
    }
    let sentVec = await causalNetEmbedding.sentenceEncode([ ['this', 'is', 'test'] ]);
    sentVec.print();
})().catch(err=>{
    console.error(err);
});