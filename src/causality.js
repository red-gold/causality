import { Tensor } from 'causal-net.core';
import { Platform } from 'causal-net.utils';
import { LoggerMixins, termLogger } from 'causal-net.log';
import { StorageMixins, indexDBStorage } from 'causal-net.storage';
import { LayerMixins, causalNetLayer } from 'causal-net.layer';
import { SupervisedModelsMixins, causalNetModels } from 'causal-net.models';
import { TrainerMixins } from 'causal-net.optimizers';

import {  PipelineBaseMixins,
          PipelineRunnerMixins,
          PipelinePredictingMixins,
          PipelineTrainingMixins,
          PipelineEvaluatingMixins,
          PipelineEnsemblePredictingMixins,
          PipelineEnsembleTrainingMixins,
          PipelineEnsembleEvaluatingMixins,
          PipelineParametersMixins,
          PipelineHyperParametersMixins,
          Function } from './pipeline/index';

export default class CausalNet extends Platform.mixWith(Tensor, [
        StorageMixins,
        LoggerMixins,
        PipelineBaseMixins,
        PipelineHyperParametersMixins,
        PipelineParametersMixins,
        LayerMixins,
        SupervisedModelsMixins,
        TrainerMixins,
        PipelineRunnerMixins,
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
        this.setModelByConfig(netConfig);
        this.Parameters = parameters;
        this.setTrainerByConfig(netConfig);
        this.Storage = indexDBStorage;
        this.saveModelDir = '/saveModel/';
        this.Logger = termLogger;
        this.Layer = causalNetLayer;
        this.Models = causalNetModels;
    }  
}