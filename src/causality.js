import { Tensor } from 'causal-net.core';
import { Platform } from 'causal-net.utils';
import { LoggerMixins } from 'causal-net.log';
import { default as PipelinePredictMixins } from './pipelinePredict.mixins';
import { default as PipelineTrainingMixins } from './pipelinePredict.mixins';
import { default as PipelineEnsemblePredictMixins } from './pipelineEnsemblePredict.mixins';
import { default as PipelineEnsembleTrainingMixins } from './pipelineEnsemblePredict.mixins';
import { default as PipelineStorageMixins } from './pipelineStorage.mixins';
import { default as PipelineParametersMixins } from './pipelineParameters.mixins';
import { default as PipelineHyperParametersMixins } from './pipelineHyperParameters.mixins';
import { default as PipelineOptimizingMixins } from './pipelineOptimizing.mixins';

import { default as Function } from './function';

export default class CausalNet extends Platform.mixWith(Tensor,[
        PipelineStorageMixins,
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
    constructor(netConfig){
        super();
        this.F = new Function();
        this.R = this.F.CoreFunction;
        this.BasePipeline = this.F.getPipeline(netConfig);        
    }

    layer(value, layerConfigure, layerParameters){
        const R = this.R;
        const {Name, Type, Parameters, Flow} = layerConfigure;
        this.logger.debug({Name, Type, Parameters, Flow});
        const OpsRunner = R.addIndex(R.reduce)(R.__,{result: value, trace: {}}, Flow);
        var {result, trace} = OpsRunner(({result, trace}, node, idx)=>{
            if(node.Parameter){
                result = this.T[node.Op](result, layerParameters[node.Parameter], ...node.Args);
            }
            else{
                result = this.T[node.Op](result, ...node.Args);    
            };
            trace[idx] = result.shape;
            return {result, trace};
        });
        return {[Name]: result, trace};
    }    
}