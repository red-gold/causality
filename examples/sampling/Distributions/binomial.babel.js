import { Distributions } from 'causal-net.sampling';
import { causalNetCore } from 'causal-net.core';
import { termLogger } from 'causal-net.log';
(()=>{
    const T = causalNetCore.CoreTensor;
    const binomial = new Distributions.Binomial({p: T.tensor(0.5), n: T.tensor(1) });
    const samples = binomial.sampling([2,5]);
    samples.print();
    let logLik = binomial.logP(samples);
    logLik.print();
})();