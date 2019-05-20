import { causalNetSGDOptimizer } from 'causal-net.optimizers';
import { causalNetModels } from 'causal-net.models';
import { causalNetParameters, causalNetLayers } from 'causal-net.layer';
import { causalNetDataSource } from 'causal-net.datasets';
import { tokenizer } from 'causal-net.preprocessing';
import { universalEmbedding } from 'causal-net.representation';
import { indexDBStorage } from 'causal-net.storage'; 
import { tabularPreprocessing } from 'causal-net.preprocessing';
import { default as Config } from '../config'; 
let promiseEmitter = {};
let className = [];
const PipeLineConfigure = {
        Dataset: { 
            Source: causalNetDataSource,
            Preprocessing:{
                SampleTransformer: async (data)=>{
                    const asEncode = true;
                    let tokens = tokenizer.tokenize( data[0], asEncode);
                    let sentVec = await universalEmbedding.transform(tokens);
                    return Array.from(sentVec);
                },
                LabelTransformer: (data, className)=>{
                    let oneHotCode = tabularPreprocessing.oneHotEncode( data[0], className );
                    return oneHotCode;
                }
            } 
        },
        Net: { 
                Parameters: causalNetParameters.InitParameters({}),
                Layers: { 
                    Predict: [ causalNetLayers.dense({ inputSize:512, 
                                                       outputSize:20}) ]
                },
                Model: causalNetModels.classification(20),
                Optimizer: causalNetSGDOptimizer.adam({ learningRate: 0.01 })
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
                return {Predict: sentVec, EnsemblePredict: sentVec};
            },
            Listener: null
        }
    };

const Connector = async ({sourceLink, listener})=>{
    await tokenizer.connect(Config.TokenServer);
    await indexDBStorage.connect('20newsgroup');
    await universalEmbedding.connect(Config.USEServer);
    let { ClassName } = await causalNetDataSource.connect(sourceLink);
    className = ClassName;
    let dataChunks = causalNetDataSource.DataChunks;
    PipeLineConfigure.Deployment.Listener = listener;
    return {dataChunks, promiseEmitter, className};
};
export { PipeLineConfigure, Connector };