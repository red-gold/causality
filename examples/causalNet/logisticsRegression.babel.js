import { causalNetSGDOptimizer } from 'causal-net.optimizers';
import { causalNetModels } from 'causal-net.models';
import { causalNetParameters, causalNetLayers } from 'causal-net.layer';
import { causalNet } from 'causal-net';

const DummyData = (batchSize)=>{
    let samples = [ [0,1,2,3], 
                    [0,1,2,3], 
                    [0,1,2,3] ];
    let labels  = [ [1,0], 
                    [1,0], 
                    [1,0] ];
    return [{samples, labels}];
};

(async ()=>{
    let emitCounter = 0;
    const PipeLineConfigure = {
        Dataset: {
            TrainDataGenerator: DummyData,
            TestDataGenerator: DummyData
        },
        Net: { 
                Parameters: causalNetParameters.InitParameters(),
                Layers: { 
                    Predict: [  causalNetLayers.dense(4, 3), 
                                causalNetLayers.dense(3, 2)]
                },
                Model: causalNetModels.classification(2),
                Optimizer: causalNetSGDOptimizer.adam({learningRate: 0.01})
        },
        Deployment: {
            Emitter: async ()=>{
                return new Promise((resolve, reject)=>{
                    setTimeout(()=>{
                        let data = (emitCounter < 3)?{Predict: [0,1,2,3]}:null;
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

    causalNet.setByConfig(PipeLineConfigure);
    let predictInfer = causalNet.PredictModel( T.tensor([[1,2,3,4]]) );
    predictInfer.print();
    causalNet.deploy().then(res=>console.log(res));
    console.log(await causalNet.train(100, 1));
    console.log(await causalNet.test(100));
})().catch(err=>{
    console.error({err});
});