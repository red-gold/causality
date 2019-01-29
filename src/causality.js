import { Tensor } from 'causal-net.core';
import { Platform } from 'causal-net.utils';
import { LoggerMixins, termLogger } from 'causal-net.log';
import { StorageMixins, indexDBStorage } from 'causal-net.storage';
import { LayerMixins, causalNetLayer } from 'causal-net.layer';
import { SupervisedModelsMixins, causalNetModels } from 'causal-net.models';

import { default as PipelineBaseMixins } from './pipelineBase.mixins';
import { default as PipelineRunnerMixins } from './pipelineRunner.mixins';
import { default as PipelinePredictingMixins } from './pipelinePredicting.mixins';
import { default as PipelineTrainingMixins } from './pipelineTraining.mixins';
import { default as PipelineEvaluatingMixins } from './pipelineEvaluating.mixins';
import { default as PipelineEnsemblePredictMixins } from './pipelineEnsemblePredicting.mixins';
import { default as PipelineEnsembleTrainingMixins } from './pipelineEnsembleTraining.mixins';
import { default as PipelineEnsembleEvaluatingTrainingMixins } from './pipelineEnsembleEvaluating.mixins';
import { default as PipelineParametersMixins } from './pipelineParameters.mixins';
import { default as PipelineHyperParametersMixins } from './pipelineHyperParameters.mixins';
import { default as PipelineOptimizerMixins } from './pipelineOptimizer.mixins';

import { default as Function } from './function';

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
        PipelineEnsemblePredictMixins,
        PipelineEnsembleTrainingMixins,
        PipelineEnsembleEvaluatingTrainingMixins
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