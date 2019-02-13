import {Tensor} from "causal-net.core";
var { causalNetSGDOptimizer } = require('causal-net.optimizers');
var adam = causalNetSGDOptimizer.adam({learningRate: 0.01});
const T = new Tensor().CoreTensor;
var a = T.variable(T.tensor([1,2,3,4,5,6,1,2,3,4,5,6]).reshape([2,1,6])); 
var b = T.variable(T.tensor([1,2,3,4,5,6,1,2,3,4,5,6]).reshape([2,1,6]).reshape([2,6,-1]));
var label = T.tensor([1,0]);
const FitFn = ()=>{
    return a.matMul(b).mean();
}
console.log(adam.fit(FitFn));
a.print();
b.print();