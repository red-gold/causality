import { Log, Layer, CausalNet, Core } from '../../src/index';
const { Tensor } = Core;
const { termLogger } = Log;
const { causalNetLayer } = Layer;
const DenseLayer = (name, inputSize, outputSize)=>{
        return { 
            Name: name, Type: 'Layer',
            Parameters: { Weight: [inputSize, outputSize], Bias: [outputSize] },
            Net: function(value, params){
                    let {Weight, Bias} = params;
                    let result = value.dot(Weight).add(Bias);
                var methods = [];
                for(let m in result){
                        methods.push(m);
                }
                console.log(methods);
                // return result;
                return value;
            }
        };
    };
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

const Runner = (value, nets, params)=>{
    const runNet = (value, net, params)=>{
        return net(value, params);
    } 
    return T.tidy(()=>{
        let values = {};
        values[0] = T.tensor(value);
        let last = 0;
        for(let {Name, Net} of nets){
            console.log({Name, Net});
            values[Name] = runNet(values[last], Net, params);
            last = Name;
            console.log(values[last].dataSync());
        }
        return values[last];
    });
}
const _NetConfig = {
    HyperParameters: {SampleSize:4},
    Classes: 2,
    Pipeline:[denseLayer]};
let causal = new CausalNet(_NetConfig);
let output2 = causal.Runner(inputs, [denseLayer], params);
console.log(output2.dataSync());