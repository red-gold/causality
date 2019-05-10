import { causalNetLayers, causalNetParameters, causalNetRunner } from 'causal-net.layer';
import { causalNetCore } from 'causal-net.core';
(async ()=>{
    const T = causalNetCore.CoreTensor;
    let convLayer = causalNetLayers.convolution({kernelSize:[2,2], filters:[1,2], flatten:true} );
    let denseLayer = causalNetLayers.dense({inputSize:24,outputSize:12});
    const Layers = { Predict: [ convLayer, denseLayer ] };
    const InitParameters = {};
    causalNetParameters.setOrInitParams(Layers, InitParameters);
    causalNetRunner.NetLayers = Layers;
    causalNetRunner.NetParameters = causalNetParameters;
    let predictLayer = causalNetRunner.run(Layers.Predict, 
                        T.tensor([  [1,2,3,4],
                                    [1,2,3,4],
                                    [1,2,3,4] ]).reshape([1,3,4,1]), 
                            causalNetParameters.PredictParameters);
    console.log(predictLayer.shape);
    predictLayer.print();
})();