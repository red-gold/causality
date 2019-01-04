import {Function as BaseFunction} from 'causal-net.core';
export default class Function extends BaseFunction{
    
    getTraverse(){
        return R.curry(function(keys, item){
            R.pipe.apply(null, R.map(R.prop, keys))(item);
        }); 
    }
    
    getIn(keys, item, defaultValue){
        return R.pathOr(defaultValue, keys, item);
    }
    
    setIn(keys, value, item){
        return R.assocPath(keys, value, item);
    }

    parameterAcquisition(pipelineItem, hyperParameters){
        const R = this.R; 
        function replaceIfMatch(value, hyperParameters){
            if(R.is(String, value) && R.startsWith('$', value)){
                const key = R.slice(1, Infinity, value);
                return R.prop(key, hyperParameters);
            }
            return value;
        }
        const doReplaceIfMatch = R.curry(replaceIfMatch)(R.__, hyperParameters);
        function replaceHyperParameter(pipelineItem){
            if(R.is(Array, pipelineItem) || R.is(Object, pipelineItem)){
                return R.map(replaceHyperParameter, pipelineItem);
            }
            else{
                return doReplaceIfMatch(pipelineItem);
            }
        }
        return replaceHyperParameter(pipelineItem);
    }

    isParameter(val){
        const R = this.R;
        return R.is(Array)(val) && R.all(R.is(Number), val);
    }

    getPipeline(netConfig){
        //TODO: make assertor
        return this.R.prop('Pipeline', netConfig);
    }
    
    getHyperParameter(netConfig){
        //TODO: make assertor
        return this.R.prop('HyperParameters', netConfig);
    }

    isTensor(object){
        return object.size !== undefined && object.shape !== undefined && object.dtype !== undefined;
    }
}