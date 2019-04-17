// import { causalNetSGDOptimizer } from 'causal-net.optimizers';
// import { causalNetModels } from 'causal-net.models';
// import { causalNetParameters, causalNetLayers } from 'causal-net.layer';
// import { causalNetDataSource } from 'causal-net.datasets';
let promiseEmitter = {};
let adam = {};//causalNetSGDOptimizer.adam({learningRate: 0.01});
import { universalEmbedding } from 'causal-net.representation';
const PipeLineConfigure = {
        Dataset: { 
            Source: ()=>{},
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
                Parameters: ()=>{},
                Layers: { 
                    Predict: [  ()=>{} ]
                },
                Model: ()=>{},
                Optimizer: adam
        },
        Deployment: {
            Emitter: async ()=> {
                let sentence = await new Promise((resolve, reject)=>{
                                            promiseEmitter.resolve = resolve;
                                            promiseEmitter.reject = reject;
                                        });
                console.log(sentence);
                let sentVec = await universalEmbedding.sentenceEncode([ sentence ]);
                sentVec.print();
                let data = await sentVec.data();
                return {Predict: Array.from(data)};
            },
            Listener: null
        }
    };

const Connector = async ({sourceLink, listener})=>{
    console.log('20 newsgroup pipeline is call');
    var tf = require('@tensorflow/tfjs');
    console.log(tf);
    await universalEmbedding.connect();
    let sentVec = await universalEmbedding.sentenceEncode([ 'this is' ]);
    sentVec.print();
    console.log(tf);
    await causalNetDataSource.connect(sourceLink);
    let dataChunks = causalNetDataSource.DataChunks;
    PipeLineConfigure.Deployment.Listener = listener;
    return {dataChunks, promiseEmitter};
};
Connector({});
// let PipeLineConfigure = {};
export { PipeLineConfigure, Connector };