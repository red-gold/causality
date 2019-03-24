import { termLogger } from 'causal-net.log';
import { causalNetParameters, causalNetLayers, causalNetRunner, NetMixins } from 'causal-net.layer';
import { causalNetCore } from 'causal-net.core';
import { platform } from 'causal-net.utils';
import { Tensor } from 'causal-net.core';
const PipeLineConfigure = {
    Net: { 
            Parameters: { Predict: null, Encode: null, Decode: null },
            Layers: { 
                Predict: [  causalNetLayers.dense(4, 3), 
                            causalNetLayers.dense(3, 2)], 
                Encode: [ causalNetLayers.dense(4, 2) ], 
                Decode: [ causalNetLayers.dense(4, 2) ] 
            }
    }
}
class SimplePipeline extends platform.mixWith(Tensor, [NetMixins]){
    constructor(netParameters, netRunner){
        super();
        this.NetParameters = netParameters;
        this.NetRunner = netRunner;
    }
    load(pipeLineConfigure){
        this.getNetFromConfig(pipeLineConfigure);
    }
}
const T = causalNetCore.CoreTensor;
(async ()=>{
    let pipeline = new SimplePipeline(causalNetParameters, causalNetRunner);
    pipeline.load(PipeLineConfigure);
    console.log([ pipeline.NetParameters instanceof Tensor, 
                  pipeline.NetRunner instanceof Tensor ]);   
})().catch(err=>{
    console.error({err});
});