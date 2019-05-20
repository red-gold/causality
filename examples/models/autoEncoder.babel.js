import { causalNetModels, ModelMixins } from 'causal-net.models';
import { causalNetParameters, causalNetLayers, causalNetRunner, LayerRunnerMixins } from 'causal-net.layer';
import { causalNetCore } from 'causal-net.core';
import { platform } from 'causal-net.utils';
import { Tensor } from 'causal-net.core';
import { termLogger, LoggerMixins } from 'causal-net.log';
import { causalNetSGDOptimizer } from 'causal-net.optimizers';

class SimplePipeline extends platform.mixWith(Tensor, [LayerRunnerMixins, ModelMixins, LoggerMixins]){
    constructor(netRunner, logger){
        super();
        this.Logger = logger;
        this.LayerRunner = netRunner;
    }
}
                  
    
const T = causalNetCore.CoreTensor;
(async ()=>{
    const PipeLineConfigure = {
        Net: { 
                Parameters: causalNetParameters.InitParameters(),
                Layers: { 
                    Encode: [ causalNetLayers.dense({ inputSize: 4, 
                                                      outputSize: 2 }) ], 
                    Decode: [ causalNetLayers.dense({ inputSize: 2, 
                                                      outputSize: 4, activator:null }) ] 
                },
                Model: causalNetModels.autoEncoder()
        }
    };

    let pipeline = new SimplePipeline( causalNetRunner, termLogger);
    pipeline.setByConfig(PipeLineConfigure);
    let inputTensor = T.tensor([  [1,2,3,4],
                                  [1,2,3,4],
                                  [1,2,3,4] ]).reshape([3,4]);
    let encodeFn = pipeline.Model.Encode(inputTensor);
    encodeFn.print();
    let fitFn = pipeline.Model.Fit(inputTensor);
    fitFn.print();
    let lossFn = pipeline.Model.Loss( inputTensor, inputTensor );
    lossFn.print();
    var adam = causalNetSGDOptimizer.adam({learningRate: 0.01});
    for(let i of [1,2,3,4]){
        adam.fit(()=>T.tidy(()=>{
            let res = pipeline.Model.Loss( inputTensor, inputTensor );
            res.print();
            return res;
        }));
        pipeline.Model.Reconstruct( inputTensor ).print();
    }
})().catch(err=>{
    console.error({err});
});