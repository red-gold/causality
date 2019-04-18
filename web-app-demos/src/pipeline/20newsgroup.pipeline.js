import { causalNetSGDOptimizer } from 'causal-net.optimizers';
import { causalNetModels } from 'causal-net.models';
import { causalNetParameters, causalNetLayers } from 'causal-net.layer';
import { causalNetDataSource } from 'causal-net.datasets';
import { tokenizer } from 'causal-net.preprocessing';
import { universalEmbedding } from 'causal-net.representation';
import { indexDBStorage } from 'causal-net.storage'; 
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
                    Predict: [ causalNetLayers.dense(512,10) ]
                },
                Model: causalNetModels.classification(10),
                Optimizer: causalNetSGDOptimizer.adam({learningRate: 0.01})
        },
        Deployment: {
            Emitter: async ()=> {
                let sentence = await new Promise((resolve, reject)=>{
                                            promiseEmitter.resolve = resolve;
                                            promiseEmitter.reject = reject;
                                        });
                const asEncode = true;
                let tokens = tokenizer.tokenize(sentence, asEncode);
                let sentVec = await universalEmbedding.transform(tokens);
                return {Predict: sentVec};
            },
            Listener: null
        }
    };

const Connector = async ({sourceLink, listener})=>{
    console.log('20 newsgroup pipeline is call', sourceLink);
    await tokenizer.connect('http://0.0.0.0:5050/use/vocab.json');
    await indexDBStorage.connect('20newsgroup');
    await universalEmbedding.connect('http://0.0.0.0:5050/use/tensorflowjs_model.json');
    await causalNetDataSource.connect(sourceLink);
    let dataChunks = causalNetDataSource.DataChunks;
    PipeLineConfigure.Deployment.Listener = listener;
    return {dataChunks, promiseEmitter};
};
export { PipeLineConfigure, Connector };