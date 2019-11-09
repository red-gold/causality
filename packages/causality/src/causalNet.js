import { DataSourceMixin } from 'causal-net.datasets';
import { PreprocessingMixin, causalNetPreprocessingStream } from 'causal-net.preprocessing';
import { TrainerMixin, EvaluatorMixin } from 'causal-net.optimizers';
import { ModelMixin } from 'causal-net.models';
import { causalNetRunner, LayerRunnerMixin } from 'causal-net.layer';
import { Tensor } from 'causal-net.core';
import { platform } from 'causal-net.utils';
import { causalNetDeployment, DeploymentMixin } from 'causal-net.deployment';
import { termLogger, LoggerMixin } from 'causal-net.log';
import { default as functor } from './functor';
import { EnsembleTrainerMixin, EnsembleModelMixin, EnsembleDeploymentMixin } from './Ensemble/index';

/**
 * The CausalNet class is the prebuilt pipeline with methods for 
 * processing data/train/evaluate/deploy/ensemble deploy
 * { mixWith: [ 
 *         DataSourceMixin,
 *         PreprocessingMixin,
 *         LayerRunnerMixin, 
 *         ModelMixin, 
 *         EvaluatorMixin,
 *         TrainerMixin, 
 *         LoggerMixin,
 *         DeploymentMixin,
 *         EnsembleTrainerMixin,
 *         EnsembleModelMixin, 
 *         EnsembleDeploymentMixin ] }
 * @class CausalNet
 * @extends {Tensor}
 * @example
 * [EXAMPLE ../examples/causalNet/ensemble.logisticRegression.babel.js]
 */
console.log({DataSourceMixin,
    PreprocessingMixin,
    LayerRunnerMixin, 
    ModelMixin, 
    EvaluatorMixin,
    TrainerMixin, 
    LoggerMixin,
    DeploymentMixin,
    EnsembleTrainerMixin,
    EnsembleModelMixin, 
    EnsembleDeploymentMixin});
class CausalNet extends platform.mixWith(Tensor, [ 
        DataSourceMixin,
        PreprocessingMixin,
        LayerRunnerMixin, 
        ModelMixin, 
        EvaluatorMixin,
        TrainerMixin, 
        LoggerMixin,
        DeploymentMixin,
        EnsembleTrainerMixin,
        EnsembleModelMixin, 
        EnsembleDeploymentMixin ], className='CausalNet'){
    /**
     *Creates an instance of CausalNet.
     * @param { Functor } functor
     * @param { Log } logger
     * @param { Functor } streamPreprocessing
     * @param { Tensor } netParameters
     * @param { Tensor } netRunner
     * @param { Event } streamDeployment
     * @memberof CausalNet
     */
    constructor( functor, logger, streamPreprocessing, netRunner, streamDeployment){
        super();
        this.F = functor;
        this.R = this.F.CoreFunctor;
        this.Logger = logger;
        this.Preprocessing = streamPreprocessing;
        this.LayerRunner = netRunner;        
        this.Deployment = streamDeployment;
    }
}

let causalNet = new  CausalNet( functor, 
                                termLogger, 
                                causalNetPreprocessingStream, 
                                causalNetRunner, 
                                causalNetDeployment );
export default causalNet;