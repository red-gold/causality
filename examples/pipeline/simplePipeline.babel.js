import { Log, Utils, Core, Storage, Function,
    PipelineParametersMixins,
    PipelineHyperParametersMixins,
    PipelineOptimizingMixins,
    PipelinePredictMixins,
    PipelineLayersMixins,
    PipelineEnsemblePredictMixins,
    PipelineEnsembleTrainingMixins,
    PipelineTrainingMixins } from '../../src/index';
const { Logger, LoggerMixins } = Log;
const { Platform } = Utils;
const { Tensor } = Core;
const { StorageMixins, indexDBStorage } = Storage;
const _NetConfig = { HyperParameters: {BatchSize:4}, Classes: 2,
                     Pipeline:[{Name:'dense', Type: 'tensor', Parameters: { Weight: [2, 4]} } ] };
let parameters = {};
export default class myNet extends Platform.mixWith(Tensor, [
        StorageMixins,
        LoggerMixins,
        PipelineLayersMixins,
        PipelineParametersMixins,
        PipelineHyperParametersMixins,
        PipelineOptimizingMixins,
        PipelinePredictMixins,
        PipelineTrainingMixins,
        PipelineEnsemblePredictMixins,
        PipelineEnsembleTrainingMixins
    ]){
    constructor(netConfig, parameters={}){
        super();
        this.F = new Function();
        this.R = this.F.CoreFunction;
        this.setPipelineByConfig(netConfig);
        this.setHyperParametersByConfig(netConfig);
        this.setDefaultOptimizer();
        this.Parameters = parameters;
        this.Storage = indexDBStorage;
        this.saveModelDir = '/saveModel/';
        this.Logger = Logger;
    }
} 
let causalNet = new myNet(_NetConfig, parameters);
console.log(causalNet.HyperParameters);
(async ()=>{
    let params = await causalNet.Parameters;
    console.log({params});
    let summary = await causalNet.parametersSummary();    
    console.log({summary});
    await causalNet.saveParams('save_model2.model');
    await causalNet.loadParams('save_model.model');
    summary = await causalNet.parametersSummary();    
    console.log(PipelineEnsembleTrainingMixins);
    console.log({summary});
    
    
})().catch(err=>console.log({err}));