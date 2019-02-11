import {Tensor} from "causal-net.core";
var {causalNetSGDOptimizer} = require('causal-net.optimizers');
var adam = causalNetSGDOptimizer.adam({learningRate: 0.01});
const T = new Tensor().CoreTensor;
var a = T.variable(T.tensor([1,2,3,4]).reshape([2,2])); 
var b = T.variable(T.tensor([2,3,4,5]).reshape([2,2]));
const FitFn = ()=>{
    return a.mul(b).mean();
}
console.log(adam.fit(FitFn));
a.print();
b.print();