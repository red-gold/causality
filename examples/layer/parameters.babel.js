import { causalNetParameters } from 'causal-net.layer';
import { causalNetLayers } from 'causal-net.layer';
(async ()=>{
    const Layers = { 
                    Predict: [  causalNetLayers.dense({inputSize: 4, outputSize:3}), 
                                 causalNetLayers.dense({inputSize: 3, outputSize:2})], 
                    Encode: [ causalNetLayers.dense({inputSize: 4, outputSize:2}) ], 
                    Decode: [ causalNetLayers.dense({inputSize: 4, outputSize:2}) ] 
            };
    const Parameters = {};
    causalNetParameters.InitParameters(Parameters)(Layers);
    console.log(await causalNetParameters.exportParameters());
    console.log(await causalNetParameters.saveParams('save0'));
    console.log(await causalNetParameters.getSavedParamList());
    await causalNetParameters.loadParams('save0');
})();