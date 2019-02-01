import { Tensor as BaseTensor } from 'causal-net.core';
import { Platform } from 'causal-net.utils';
import { default as SGDParamsUpdatingMixins } from './sgdParamsUpdating.mixins';
export default class AdamOptimizer extends Platform.mixWith(BaseTensor, 
    [SGDParamsUpdatingMixins]){
    constructor(){
        this.defaultOptimizerParameters = {beta1: 0.1, beta2: 0.2, epsilon:0.03};
        this.optimizer = 
    }
    set Optimizer(){
        let optimizerPameters = this.OptimizerParameters;
        return this.T.train.adam(learningRate, beta1, beta2, epsilon);
    }
}