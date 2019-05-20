import { causalNetLayers, causalNetParameters, causalNetRunner } from 'causal-net.layer';
import { causalNetCore } from 'causal-net.core';
(async ()=>{
    const T = causalNetCore.CoreTensor;
    let reshapeLayer = causalNetLayers.custom({Net: (input)=>input.reshape([2,7,1]) }); 
    let seqEncodeLayer = causalNetLayers.seq2vec({ inputSize:1, encodeSize:5, attention:true } );
    const Layers = { Predict: [ reshapeLayer, seqEncodeLayer  ] };
    const InitParameters = {};
    causalNetParameters.setOrInitParams(Layers, InitParameters);
    causalNetRunner.NetLayers = Layers;
    causalNetRunner.NetParameters = causalNetParameters;
    let predictLayer = causalNetRunner.run(Layers.Predict, 
                        T.tensor([ [1, 2, 3, 4, 0, 0, 0 ],
                                   [1, 2, 3, 4, 0, 0, 0 ] ]), 
                        causalNetParameters.Parameters, { batchSize:2, seqLen: 7 });
    console.log(predictLayer.shape);
    predictLayer.print();
})();