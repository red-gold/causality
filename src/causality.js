import { Tensor } from 'causal-net.core';
import { Platform } from 'causal-net.utils';
import { LoggerMixins } from 'causal-net.log';
import { StorageMixins, indexDBStorage } from 'causal-net.storage';
import { default as PipelinePredictMixins } from './pipelinePredict.mixins';
import { default as PipelineTrainingMixins } from './pipelinePredict.mixins';
import { default as PipelineEnsemblePredictMixins } from './pipelineEnsemblePredict.mixins';
import { default as PipelineEnsembleTrainingMixins } from './pipelineEnsemblePredict.mixins';
import { default as PipelineParametersMixins } from './pipelineParameters.mixins';
import { default as PipelineHyperParametersMixins } from './pipelineHyperParameters.mixins';
import { default as PipelineOptimizingMixins } from './pipelineOptimizing.mixins';

import { default as Function } from './function';

export default class CausalNet extends Platform.mixWith(Tensor,[
        StorageMixins,
        PipelineParametersMixins,
        PipelineHyperParametersMixins,
        PipelineOptimizingMixins,
        PipelinePredictMixins,
        PipelineTrainingMixins,
        PipelineEnsemblePredictMixins, 
        PipelineEnsembleTrainingMixins,
        LoggerMixins]){
    /**
     * @param  {} netConfig
     */
    constructor(netConfig, parameters){
        super();
        this.F = new Function();
        this.R = this.F.CoreFunction;
        this.BasePipeline = this.F.getPipeline(netConfig);
        this.HyperParameters = this.F.getHyperParameter(netConfig);
        this.Parameters = parameters;
        this.Storage = indexDBStorage;
        this.saveModelDir = '/saveModel/';
        
    }    
}