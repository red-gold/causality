import { Log, Layer, Core } from '../../src/index';
const { Tensor } = Core;
const { termLogger } = Log;
const { causalNetLayer } = Layer;
let denseLayer = causalNetLayer.dense('dense1', 3, 2);
console.log({denseLayer});
const T = new Tensor().CoreTensor;
let params = { 'Weight': T.variable(T.tensor([[1,2],[2,3]])), 
               'Bias': T.variable(T.tensor([[1],[2]])) };
let inputs = [[0.52, 0.03], 
              [1.12, 0.02]];
let value = T.tensor(inputs);
let output = denseLayer.Net(value, params);
console.log(output.dataSync());

const Runner = (value, dnet, params)=>{
    return T.tidy(()=>{
        return dnet.net(value, params);
    });
}

let output2 = Runner(value, {net:denseLayer.Net}, params);
console.log(output2.dataSync());