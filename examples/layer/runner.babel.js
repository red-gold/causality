import { causalNetParameters, causalNetLayers, causalNetRunner } from 'causal-net.layer';
import { causalNetCore } from 'causal-net.core';

(async ()=>{
    const T = causalNetCore.CoreTensor;

    const Net = { 
                    Parameters: { Predict: null, Encode: null, Decode: null },
                    Layers: { 
                        Predict: [  causalNetLayers.dense({ inputSize:4, outputSize:3 }), 
                                    causalNetLayers.dense({ inputSize:3, outputSize:2 })], 
                        Encode: [ causalNetLayers.dense({ inputSize:4, outputSize:2 }) ], 
                        Decode: [ causalNetLayers.dense({ inputSize:4, outputSize:2 }) ] 
                    }
                };
    console.log(Net);
    causalNetParameters.setOrInitParams(Net.Layers, Net.Parameters);
    causalNetRunner.NetLayers = Net.Layers;
    causalNetRunner.NetParameters = causalNetParameters;
    let predictLayer = await causalNetRunner.run(Net.Layers.Predict, T.tensor([[1,2,3,4]]), 
                            causalNetParameters.Parameters);
    predictLayer.print();
    const PredictRunner = causalNetRunner.LayerPredict;
    console.log(PredictRunner);
    predictLayer = await PredictRunner(T.tensor([[1,2,3,4]]));
    predictLayer.print();
    let encodeLayer = await causalNetRunner.run(Net.Layers.Encode, T.tensor([[1,2,3,4]]), 
                            causalNetParameters.Parameters);
    encodeLayer.print();
    const EncodeRunner = causalNetRunner.LayerEncode;
    encodeLayer = await EncodeRunner( T.tensor([[1,2,3,4]]) );
    encodeLayer.print();
    let decodeLayer = await causalNetRunner.run(Net.Layers.Decode, T.tensor([[1,2,3,4]]), 
                            causalNetParameters.Parameters);
    decodeLayer.print();
    const DecodeRunner = causalNetRunner.LayerDecode;
    decodeLayer = await DecodeRunner( T.tensor([[1,2,3,4]]) );
    decodeLayer.print();
})();
