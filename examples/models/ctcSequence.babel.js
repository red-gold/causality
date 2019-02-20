import { causalNetCore } from "causal-net.core";
import { causalNetModels } from "causal-net.models";
import { causalNetSGDOptimizer } from 'causal-net.optimizers';
var adam = causalNetSGDOptimizer.adam({learningRate: 0.01});
const T = causalNetCore.CoreTensor;
const R = causalNetCore.CoreFunction;
var ModelW = T.variable(T.tensor([ [ 1, 2, 2], 
                                   [ 2, 3, 4] ]));
var inputXs = T.tensor([ [ 1, 2],
                         [ 3, 4],
                         [ 3, 4],
                         [ 5, 6] ]);
//label space: {A, B, -}, label sequence: [A, B]
var outputOneHotLabel = T.tensor([ [ 1, 0, 0],
                                   [ 0, 1, 0] ]);
var filledOneHotLabel = T.tensor([ [ 1, 0, 0],
                                   [ 0, 1, 0],
                                   [ 0, 1, 0],
                                   [ 0, 1, 0] ]);
const { Loss } = causalNetModels.CTC();
const SimpleRegressionFitFn = ()=>{
    const [L, S] = inputXs.shape;
    let logProbs = [];
    for(let stepIdx of R.range(0, L)){
        let inputX = inputXs.gather([stepIdx], 0);
        let labelX = filledOneHotLabel.gather([stepIdx], 0);
        let out = inputX.matMul(ModelW);
        let logProb = out.sub(out.logSumExp(1, true));
        logProb.print();
        logProbs.push(logProb.mul(labelX).neg());
    }
    return T.stack(logProbs).mean();
};
SimpleRegressionFitFn().print();
adam.fit(SimpleRegressionFitFn).print();
const Loss = ()=>{
    const FWBW = ()=>{

    };

    const BW_trace = ()=>{

    };
}
const ctcFitFn = ()=>{

}

ModelW.print();