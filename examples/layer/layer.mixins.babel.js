import { causalNetLayer, LayerMixins } from 'causal-net.layer';
import { causalNetCore } from 'causal-net.core';
import { platform } from 'causal-net.utils';
import { termLogger } from 'causal-net.log'; 
const T = causalNetCore.CoreTensor;
const PipelineConfig = {
    Net:{
        Parameters: { Predict: null, Encode: null, Decode: null },
        Layer: { Predict: [ causalNetLayer.dense(4, 2), 
                            causalNetLayer.dense(4, 2)], 
                 Encode: [ causalNetLayer.dense(4, 2) ], 
                 Decode: [ causalNetLayer.dense(4, 2) ] }
    }
};

class SimplePipeline extends LayerMixins{}

let pipeline = 

