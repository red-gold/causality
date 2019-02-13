import { causalNetCore } from "causal-net.core";
import { causalNetModels } from "causal-net.models";
import { causalNetSGDOptimizer } from 'causal-net.optimizers';
var adam = causalNetSGDOptimizer.adam({learningRate: 0.01});
const T = causalNetCore.CoreTensor;
var W = T.variable(T.tensor([1,2,3,4,5,6]));
var Wc1 = T.variable(T.tensor([1,2,3,4,5,6])); 
var Wc2 = T.variable(T.tensor([1,2,3,4,5,6]));
var Wnc1 =  T.variable(T.tensor([1,2,3,4,5,6]));
var Wnc2 =  T.variable(T.tensor([1,2,3,4,5,6]));

var label = T.tensor([1,1,-1,-1]);
const { Loss } = causalNetModels.skipGram();
const FitFn = ()=>{
    var Wa = T.tile(W, [4]).reshape([4,1,6])
    var Wb = T.stack([ Wc1, Wc2, Wnc1, Wnc2 ]).reshape([4,6,1]);
    return Loss(Wa.matMul(Wb).reshape([4]), label);
};
adam.fit(FitFn).print();
W.print();
Wc1.print();
Wc2.print();
Wnc1.print();
Wnc2.print();