import { causalNetSGDOptimizer } from 'causal-net.optimizers';
import { causalNetModels } from 'causal-net.models';
import { causalNetParameters, causalNetLayers } from 'causal-net.layer';
import { causalNetDataSource } from 'causal-net.datasets';
const DummyData = (batchSize)=>{
        let samples = [ [0,1,2,3], 
                        [0,1,2,3], 
                        [0,1,2,3] ];
        let labels  = [ [1,0], 
                        [1,0], 
                        [1,0] ];
        return [{samples, labels}];
    };
    let emitCounter = 0;
const PipeLineConfigure = {
        Dataset: {
            TrainDataGenerator: DummyData,
            TestDataGenerator: DummyData
        },
        Net: { 
                Parameters: causalNetParameters.InitParameters(),
                Layers: { 
                    Predict: [  causalNetLayers.dense(28*28*4,10) ]
                },
                Model: causalNetModels.classification(2),
                Optimizer: causalNetSGDOptimizer.adam({learningRate: 0.1})
        },
        Deployment: {
            Emitter: async ()=>{
                return new Promise((resolve, reject)=>{
                    setTimeout(()=>{
                        let data = (emitCounter < 3)
                                        ?{Predict: [0,1,2,3], EnsemblePredict: [0,1,2,3]}
                                        :null;
                        emitCounter += 1;
                        console.log({ emitter: data});
                        resolve(data);
                    }, 1000);
                });
            },
            Listener: async (infer)=>{
                console.log({ Listener: infer});
            }
        }
    };
const Connector = async ({sourceLink})=>{
    let description = await causalNetDataSource.connect(sourceLink);
    return {sourceLink: description};
};
export { PipeLineConfigure, Connector };