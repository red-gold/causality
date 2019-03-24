import { causalNetParameters, causalNetLayers, causalNetRunner } from 'causal-net.layer';
import { causalNetCore } from 'causal-net.core';
(async ()=>{
    const T = causalNetCore.CoreTensor;

    const Net = { 
                    Parameters: { Predict: null, Encode: null, Decode: null },
                    Layers: { 
                        Predict: [  causalNetLayers.dense(4, 3), 
                                    causalNetLayers.dense(3, 2)], 
                        Encode: [ causalNetLayers.dense(4, 2) ], 
                        Decode: [ causalNetLayers.dense(4, 2) ] 
                    }
                };
    console.log(causalNetParameters.setOrInitParams(Net.Layers, Net.Parameters));
    
    let predictInfer = causalNetRunner.run(Net.Layers.Predict, T.tensor([[1,2,3,4]]), 
                            causalNetParameters.PredictParameters);
    predictInfer.print();
    let encodeInfer = causalNetRunner.run(Net.Layers.Encode, T.tensor([[1,2,3,4]]), 
                            causalNetParameters.EncodeParameters);
    encodeInfer.print();
    let decodeInfer = causalNetRunner.run(Net.Layers.Decode, T.tensor([[1,2,3,4]]), 
                            causalNetParameters.DecodeParameters);
    decodeInfer.print();
})();
