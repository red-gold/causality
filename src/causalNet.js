import { DataSourceMixins } from 'causal-net.datasets';
import { PreprocessingMixins, causalNetPreprocessingStream } from 'causal-net.preprocessing';
import { TrainerMixins, EvaluatorMixins } from 'causal-net.optimizers';
import { ModelMixins } from 'causal-net.models';
import { causalNetRunner, LayerRunnerMixins, causalNetParameter } from 'causal-net.layer';
import { Tensor } from 'causal-net.core';
import { platform } from 'causal-net.utils';
import { causalNetDeployment, DeploymentMixins } from 'causal-net.deployment';
import { termLogger, LoggerMixins } from 'causal-net.log';
import { default as functor } from './functor';
import { EnsembleTrainerMixins, EnsembleModelMixins, EnsembleDeploymentMixins } from './Ensemble/index';

class CausalNet extends platform.mixWith(Tensor, [ 
        DataSourceMixins,
        PreprocessingMixins,
        LayerRunnerMixins, 
        ModelMixins, 
        EvaluatorMixins,
        TrainerMixins, 
        LoggerMixins,
        DeploymentMixins,
        EnsembleTrainerMixins,
        EnsembleModelMixins, 
        EnsembleDeploymentMixins ]){
    constructor( functor, logger, streamPreprocessing, netParameters, netRunner, streamDeployment){
        super();
        this.F = functor;
        this.R = this.F.CoreFunctor;
        this.Logger = logger;
        this.Preprocessing = streamPreprocessing;
        this.LayerRunner = netRunner;        
        this.Deployment = streamDeployment;
        this.Parameters = netParameters;
    }
}

export default new  CausalNet(  functor, 
                                termLogger, 
                                causalNetPreprocessingStream, 
                                causalNetParameter,
                                causalNetRunner, 
                                causalNetDeployment );