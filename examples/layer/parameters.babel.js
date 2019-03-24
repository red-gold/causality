import { causalNetParameters } from 'causal-net.layer';
import { causalNetLayers } from 'causal-net.layer';
(async ()=>{
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
    console.log(await causalNetParameters.exportParameters());
    console.log(await causalNetParameters.saveParams('save0'));
    console.log(await causalNetParameters.getSavedParamList());
    console.log(await causalNetParameters.loadParams('save0'));
})();