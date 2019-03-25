import { causalNetParameters, causalNetLayers, causalNetRunner, NetMixins } from 'causal-net.layer';
import { causalNetCore } from 'causal-net.core';
import { platform } from 'causal-net.utils';
import { Tensor } from 'causal-net.core';
import { termLogger } from 'causal-net.log';
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
    constructor(netParameters, netRunner, logger){
        super();
        this.logger = logger;
        this.Parameters = netParameters;
        this.Net = netRunner;
    }
}
const T = causalNetCore.CoreTensor;
(async ()=>{
    let pipeline = new SimplePipeline(causalNetParameters, causalNetRunner, termLogger);
    pipeline.setByConfig(PipeLineConfigure);
    console.log([ pipeline.Layers,
                  pipeline.Parameters,
                  pipeline.Net ]);   
})().catch(err=>{
    console.error({err});
});