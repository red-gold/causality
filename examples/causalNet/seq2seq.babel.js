import { causalNetSGDOptimizer } from 'causal-net.optimizers';
import { causalNetModels } from 'causal-net.models';
import { causalNetParameters, causalNetLayers } from 'causal-net.layer';
import { causalNet } from 'causal-net';
import { termLogger } from 'causal-net.log';

(async ()=>{
    const DummyData = (batchSize)=>{
        let samples = [ [ [1], [1], [2] , [3] ],
                        [ [1], [1], [2] , [3] ],
                        [ [1], [1], [2] , [3] ],
                        [ [1], [1], [2] , [3] ] ];
        let labels  = [ [1,0], [1,0], [1,0], [1,0]  ];
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
                    Predict: [  causalNetLayers.seq2vec({ inputSize:1, encodeSize:5, attention:true }), 
                                causalNetLayers.dense({ inputSize: 5, outputSize: 2 })]
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
                        termLogger.log({ emitter: data});
                        resolve(data);
                    }, 1000);
                });
            },
            Listener: async (infer)=>{
                termLogger.log({ Listener: infer});
            }
        }
    };
    causalNet.setByConfig(PipeLineConfigure);
    
    let loss = await causalNet.train({numEpochs:10, batchSize:3, seqLen:4});
    let plotId = termLogger.plot({ type:'line', data: loss, 
                      xLabel: '# of iter', yLabel: 'loss' });
    await termLogger.show({plotId});
    // termLogger.log(await causalNet.test({}));
    // termLogger.log({deployResult});
})();