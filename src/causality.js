import { Tensor } from 'causal-net.core';
import { Platform } from 'causal-net.utils';
import { LoggerMixins, termLogger } from 'causal-net.log';
import { StorageMixins, indexDBStorage } from 'causal-net.storage';
import { LayerMixins, causalNetLayer } from 'causal-net.layer';
import { SupervisedModelsMixins, causalNetModels } from 'causal-net.models';

 import { PipelineBaseMixins,
          PipelineRunnerMixins,
          PipelinePredictingMixins,
          PipelineTrainingMixins,
          PipelineEvaluatingMixins,
          PipelineEnsemblePredictingMixins,
          PipelineEnsembleTrainingMixins,
          PipelineEnsembleEvaluatingMixins,
          PipelineParametersMixins,
          PipelineHyperParametersMixins,
          PipelineOptimizerMixins, Function } from './pipeline/index';
console.log({StorageMixins,
    LoggerMixins,
    PipelineBaseMixins,
    PipelineHyperParametersMixins,
    PipelineParametersMixins,
    LayerMixins,
    SupervisedModelsMixins,
    PipelineRunnerMixins,
    PipelineOptimizerMixins,
    PipelinePredictingMixins,
    PipelineTrainingMixins,
    PipelineEvaluatingMixins,
    PipelineEnsemblePredictingMixins,
    PipelineEnsembleTrainingMixins,
    PipelineEnsembleEvaluatingMixins});
export default class CausalNet extends Platform.mixWith(Tensor, [
        StorageMixins,
        LoggerMixins,
        PipelineBaseMixins,
        PipelineHyperParametersMixins,
        PipelineParametersMixins,
        LayerMixins,
        SupervisedModelsMixins,
        PipelineRunnerMixins,
        PipelineOptimizerMixins,
        PipelinePredictingMixins,
        PipelineTrainingMixins,
        PipelineEvaluatingMixins,
        PipelineEnsemblePredictingMixins,
        PipelineEnsembleTrainingMixins,
        PipelineEnsembleEvaluatingMixins
    ]){
    constructor(netConfig, parameters={}){
        super();
        this.F = new Function();
        this.R = this.F.CoreFunction;
        this.setBasePipelineByConfig(netConfig);
        this.setHyperParametersByConfig(netConfig);
        this.setHyperParametersByConfig(netConfig);
        this.setModelByConfig(netConfig);
        this.setDefaultOptimizer();
        this.Parameters = parameters;
        this.Storage = indexDBStorage;
        this.saveModelDir = '/saveModel/';
        this.Logger = termLogger;
        this.Layer = causalNetLayer;
        this.Models = causalNetModels;
    }  
}