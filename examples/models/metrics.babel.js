import { causalNetMetrics } from 'causal-net.models';
import { causalNetCore } from 'causal-net.core';
import { termLogger } from 'causal-net.log';
const T = causalNetCore.CoreTensor;
(async ()=>{
    let p = T.tensor([0.6, 0.3, 0.1]);
    let q = T.tensor([0.5, 0.4, 0.1]);
    let bleu = causalNetMetrics.KLpq(p, q);
    termLogger.log(await bleu.data());
})();