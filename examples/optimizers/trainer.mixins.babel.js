import { causalNetSGDOptimizer, TrainerMixins } from 'causal-net.optimizers';
import { platform } from 'causal-net.utils';
import { Tensor } from 'causal-net.core';
const PipeLineConfigure = {
    Net:{
        HyperParameters: {SampleSize:10},
        Parameters: {},
        Layer: { Predict: [], Encode: [], Decode: [] },
        Model: { 
            Fit: ()=>{}, 
            Loss: ()=>{}
        },
        Optimizer: {
            Method: ()=>{},
            OptimizerParameters:{}
        }
    }
}
class SimplePipeline extends platform.mixWith(Tensor, [TrainerMixins]){
    constructor(configure){
        super();
        this.Trainer = configure.Trainer;
    }
}
let pipeline = new SimplePipeline(PipeLineConfigure);
console.log([ pipeline.Optimizer instanceof Tensor ]);
console.log([ pipeline.OptimizerParameters, pipeline.TrainableParameters ]);