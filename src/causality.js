import { Tensor } from 'causal-net.core';
import { Platform } from 'causal-net.utils';
import { LoggerMixins, Logger } from 'causal-net.log';
import { StorageMixins, indexDBStorage } from 'causal-net.storage';
import { default as PipelinePredictMixins } from './pipelinePredict.mixins';
import { default as PipelineLayersMixins } from './pipelineLayers.mixins';
import { default as PipelineTrainingMixins } from './pipelineTraining.mixins';
import { default as PipelineEnsemblePredictMixins } from './pipelineEnsemblePredict.mixins';
import { default as PipelineEnsembleTrainingMixins } from './pipelineEnsembleTraining.mixins';
import { default as PipelineParametersMixins } from './pipelineParameters.mixins';
import { default as PipelineHyperParametersMixins } from './pipelineHyperParameters.mixins';
import { default as PipelineOptimizingMixins } from './pipelineOptimizing.mixins';

import { default as Function } from './function';

export default class CausalNet extends Platform.mixWith(Tensor, [
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