import { DataSourceMixins } from 'causal-net.datasets';
import { PreprocessingMixins, causalNetPreprocessingStream } from 'causal-net.preprocessing';
import { TrainerMixins, EvaluatorMixins } from 'causal-net.optimizers';
import { ModelMixins } from 'causal-net.models';
import { causalNetRunner, LayerRunnerMixins } from 'causal-net.layer';
import { Tensor } from 'causal-net.core';
import { platform } from 'causal-net.utils';
import { causalNetDeployment, DeploymentMixins } from 'causal-net.deployment';
import { termLogger, LoggerMixins } from 'causal-net.log';
import { default as functor } from './functor';

class CausalNet extends platform.mixWith(Tensor, [ 
        DataSourceMixins,
        PreprocessingMixins,
        LayerRunnerMixins, 
        ModelMixins, 
        EvaluatorMixins,
        TrainerMixins, 
        LoggerMixins,
        DeploymentMixins ]){
    constructor( functor, logger, streamPreprocessing, netRunner, streamDeployment){
        super();
        this.F = functor;
        this.Logger = logger;
        this.Preprocessing = streamPreprocessing;
        this.LayerRunner = netRunner;        
        this.Deployment = streamDeployment;
    }
}

export default CausalNet( functor, 
                          termLogger, 
                          causalNetPreprocessingStream, 
                          causalNetRunner, 
                          causalNetDeployment );