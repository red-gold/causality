import { TrainerMixins, causalNetLayer } from 'causal-net.layer';
import { platform } from 'causal-net.utils';
import { Tensor } from 'causal-net.core';
const PipeLineConfigure = {
    
}
class SimplePipeline extends platform.mixWith(Tensor, [TrainerMixins]){
    constructor(configure){
        super();
        this.Layer = causalNetLayer;
    }
}
let pipeline = new SimplePipeline(PipeLineConfigure);
pipeline.connect();
console.log(pipeline.Layer instanceof Tensor);