import { causalNetSGDOptimizer } from 'causal-net.optimizers';
import { causalNetModels } from 'causal-net.models';
import { causalNetParameters, causalNetLayers } from 'causal-net.layer';
import { causalNetDataSource } from 'causal-net.datasets';
import { imagePreprocessing } from 'causal-net.preprocessing';

const DummyData = (batchSize)=>{
        let samples = [ [0,1,2,3], 
                        [0,1,2,3], 
                        [0,1,2,3] ];
        let labels  = [ [1,0], 
                        [1,0], 
                        [1,0] ];
        return [{samples, labels}];
    };
let dataEmitter = ()=>{};
let dataListerner = ()=>{};
const PipeLineConfigure = {
        Dataset: { 
            Source: causalNetDataSource,
            Preprocessing:{
                SampleTransformer: (data)=>{
                    data = imagePreprocessing.oneBitTransform(data);
                    console.log(data);
                    return data;
                },
                LabelTransformer: (data)=>{
                    console.log({'receive label to transform': data});
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
            Emitter: async ()=>{
                return new Promise(async (resolve, reject)=>{
                    let data = await dataEmitter();
                    console.log({ emitter: data});
                    resolve(data);
                });
            },
            Listener: async (infer)=>{
                console.log({ Listener: infer});
                dataListerner(infer);
            }
        }
    };
const Connector = async ({sourceLink, emitter, listener})=>{
    console.log('connector is call');
    await causalNetDataSource.connect(sourceLink);
    let dataChunks = causalNetDataSource.DataChunks;
    dataEmitter = emitter;
    dataListerner = listener;
    return {dataChunks};
};
export { PipeLineConfigure, Connector };