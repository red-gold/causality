import { Tensor as BaseTensor, Function } from 'causal-net.core';
import { Platform } from 'causal-net.utils';
import { default as SGDFitParamsMixins } from './SGDFitParams.mixins';
export default class AdamOptimizer extends Platform.mixWith(BaseTensor, 
    [ SGDFitParamsMixins ]){
    constructor(optimizerParams={}){
        super();
        let defaultOptimizerParameters = {beta1: 0.1, beta2: 0.2, epsilon:0.03};
        this.F = new Function();
        const R = this.F.R;
        const {learningRate, beta1, beta2, epsilon} = 
            R.mergeDeepLeft(optimizerParams, defaultOptimizerParameters);
        this.trainer = this.T.train.adam(learningRate, beta1, beta2, epsilon);
    }
}