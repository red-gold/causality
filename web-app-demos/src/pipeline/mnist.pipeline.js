import { causalNetSGDOptimizer } from 'causal-net.optimizers';
import { causalNetModels } from 'causal-net.models';
import { causalNetParameters, causalNetLayers } from 'causal-net.layer';
import { causalNetDataSource } from 'causal-net.datasets';
import { imagePreprocessing } from 'causal-net.preprocessing';
import { indexDBStorage } from 'causal-net.storage'; 
let promiseEmitter = {};

let denseLayer = causalNetLayers.dense({inputSize:24,outputSize:12});
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
                    Predict: [ 
                        causalNetLayers.custom({ Net: (input)=>{
                            // const [B, ...Sh] = input.shape;
                            return input.reshape([B,28,28,1]); 
                        } }),
                        causalNetLayers.convolution({ kernelSize:[3,3], filters:[1,2], flatten:true }), 
                        causalNetLayers.dense({inputSize:28*28*2,outputSize:10} ) ]
                },
                Model: causalNetModels.classification(10),
                Optimizer: causalNetSGDOptimizer.adam({learningRate: 0.01})
        },
        Deployment: {
            Emitter: async ()=> {
                let {data, size} = await new Promise((resolve, reject)=>{
                                            promiseEmitter.resolve = resolve;
                                            promiseEmitter.reject = reject;
                                        });
                let rescaledImage = imagePreprocessing.imageResize(data, size, [28, 28]);
                let sdata = imagePreprocessing.oneBitTransform(rescaledImage);
                return {Predict: sdata, EnsemblePredict: sdata};
            },
            Listener: null
        }
    };
const Connector = async ({sourceLink, listener})=>{
    await indexDBStorage.connect('mnist');
    await causalNetDataSource.connect(sourceLink);
    let dataChunks = causalNetDataSource.DataChunks;
    PipeLineConfigure.Deployment.Listener = listener;
    return {dataChunks, promiseEmitter};
};
export { PipeLineConfigure, Connector };