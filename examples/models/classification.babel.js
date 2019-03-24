import { termLogger } from 'causal-net.log';
import { causalNetParameters, causalNetLayers, causalNetRunner, NetMixins } from 'causal-net.layer';
import { causalNetModels, ModelMixins } from 'causal-net.models';
import { causalNetCore } from 'causal-net.core';
import { platform } from 'causal-net.utils';
import { Tensor } from 'causal-net.core';
const PipeLineConfigure = {
    Net: { 
            Parameters: { Predict: null, Encode: null, Decode: null },
            Layers: { 
                Predict: [ causalNetLayers.dense(4, 3), 
                           causalNetLayers.dense(3, 2)], 
                Encode: [ causalNetLayers.dense(4, 2) ], 
                Decode: [ causalNetLayers.dense(4, 2) ] 
            },
            Model: causalNetModels.classification(2)
    }
}
class SimplePipeline extends platform.mixWith(Tensor, 
        [ NetMixins, 
          ModelMixins ]){
    constructor(netParameters, netRunner, netModel){
        super();
        this.NetParameters = netParameters;
        this.NetRunner = netRunner;
        this.NetModel = netModel;
    }
    load(pipeLineConfigure){
        this.getNetFromConfig(pipeLineConfigure);
        this.getModelFromConfig(pipeLineConfigure);
    }
}
const T = causalNetCore.CoreTensor;
(async ()=>{
    let pipeline = new SimplePipeline( causalNetParameters, 
                            causalNetRunner, causalNetModels);
    pipeline.load(PipeLineConfigure);
    console.log([ pipeline.NetParameters instanceof Tensor ]);
    console.log([ pipeline.NetRunner instanceof Tensor ]);   
    const PredictRunner = pipeline.NetRunner.PredictRunner;
    let predictInfer = PredictRunner(T.tensor([[1,2,3,4]]));
    predictInfer.print();
    predictInfer = pipeline.netPredict(T.tensor([[1,2,3,4]]));
    predictInfer.print();
    // let encodeInfer = pipeline.netEncode(T.tensor([[1,2,3,4]]));
    // encodeInfer.print();
    // let decodeInfer = pipeline.netDecode(T.tensor([[1,2,3,4]]));
    // decodeInfer.print();
    // let fit = pipeline.Fit(T.tensor([[1,2,3,4]]).asType('float32'));
    // fit.print();
    // let modelOneHotPredict = pipeline.netOneHotPredict(T.tensor([[1,2,3,4]]).asType('float32'));
    // modelOneHotPredict.print();
    // let modelLoss = pipeline.Loss(T.tensor([[1,2,3,4]]).asType('float32'), 
    //                          T.tensor([[0, 1]]).asType('float32'));
    // modelLoss.print();
})().catch(err=>{
    console.error({err});
});

(async ()=>{
})().catch(err=>{
    console.error({err});
});