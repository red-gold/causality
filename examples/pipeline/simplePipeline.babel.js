import { Log, Utils, Core, Storage, Function, Layer, Optimizers,
    PipelineParametersMixins,
    PipelineHyperParametersMixins,
    PipelineBaseMixins,
    PipelineRunnerMixins,
    PipelinePredictMixins,
    PipelineTrainingMixins } from '../../src/index';
const { termLogger, LoggerMixins } = Log;
const { Platform } = Utils;
const { Tensor } = Core;
const { StorageMixins, indexDBStorage } = Storage;
const { CausalNetLayerMixins, causalNetLayer } = Layer;
const _NetConfig = { HyperParameters: {BatchSize:4}, Classes: 2,
                     Pipeline:[{Name:'dense', Type: 'tensor', Parameters: { Weight: [2, 4]} } ] };
let parameters = {};
export default class myNet extends Platform.mixWith(Tensor, [
        StorageMixins,
        LoggerMixins,
        PipelineBaseMixins,
        CausalNetLayerMixins,
        PipelineRunnerMixins,
        PipelineParametersMixins,
        PipelineHyperParametersMixins,
        PipelineOptimizingMixins,
        PipelinePredictMixins,
        PipelineTrainingMixins
    ]){
    constructor(netConfig, parameters={}){
        super();
        this.F = new Function();
        this.R = this.F.CoreFunction;
        this.setPipelineByConfig(netConfig);
        this.setHyperParametersByConfig(netConfig);
        this.setTrainerByConfig(netConfig);
        this.Parameters = parameters;
        this.Storage = indexDBStorage;
        this.saveModelDir = '/saveModel/';
        this.Logger = termLogger;
        this.Layer = causalNetLayer;
    }
} 
// let causalNet = new myNet(_NetConfig, parameters);
// console.log(causalNet.HyperParameters);
// (async ()=>{
//     let params = await causalNet.Parameters;
//     console.log({params});
//     let summary = await causalNet.parametersSummary();    
//     console.log({summary});
//     await causalNet.saveParams('save_model2.model');
//     await causalNet.loadParams('save_model.model');
//     summary = await causalNet.parametersSummary();    
//     console.log(PipelineEnsembleTrainingMixins);
//     console.log({summary});
    
    
// })().catch(err=>console.log({err}));