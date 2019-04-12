import { causalNetSGDOptimizer } from 'causal-net.optimizers';
import { causalNetModels } from 'causal-net.models';
import { causalNetParameters, causalNetLayers } from 'causal-net.layer';
import { causalNetDataSource } from 'causal-net.datasets';
import { imagePreprocessing } from 'causal-net.preprocessing';
import { termLogger } from 'causal-net.log';
let promiseEmitter = {};

const PipeLineConfigure = {
        Dataset: { 
            Source: causalNetDataSource,
            Preprocessing:{
                SampleTransformer: (data)=>{
                    data = imagePreprocessing.oneBitTransform(data);
                    return data;
                },
                LabelTransformer: (data)=>{
                    return data;
                }
            } 
        },
        Net: { 
                Parameters: causalNetParameters.InitParameters({}),
                Layers: { 
                    Predict: [  causalNetLayers.dense(28*28,10) ]
                },
                Model: causalNetModels.classification(10),
                Optimizer: causalNetSGDOptimizer.adam({learningRate: 0.01})
        },
        Deployment: {
            Emitter: async ()=> {
                let image = await new Promise((resolve, reject)=>{
                                            promiseEmitter.resolve = resolve;
                                            promiseEmitter.reject = reject;
                                        });
                let rescaledImage = imagePreprocessing.imageResize(image, [150, 150], [28, 28]);
                let data = imagePreprocessing.oneBitTransform(rescaledImage);
                return {Predict: data};
            },
            Listener: null
        }
    };
const Connector = async ({sourceLink, listener})=>{
    console.log('connector is call');
    await causalNetDataSource.connect(sourceLink);
    let dataChunks = causalNetDataSource.DataChunks;
    PipeLineConfigure.Deployment.Listener = listener;
    return {dataChunks, promiseEmitter};
};
export { PipeLineConfigure, Connector };