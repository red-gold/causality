const PipelineHyperParametersMixins = (PipelineClass)=> class extends PipelineClass{
    setHyperParametersByConfig(netConfig){
        this.hyperParameters = this.F.getHyperParameter(netConfig);
        this.hyperParameterAcquisition();
    }
    hyperParameterAcquisition(){
        console.log('hyperParameterAcquisition');
        const R = this.R; 
        let hyperParameters = this.hyperParameters;
        if(!hyperParameters){
            throw Error(`${hyperParameters} not hyperParameters`);
        }
        function replaceIfMatch(value, hyperParameters){
            if(R.is(String, value) && R.startsWith('$', value)){
                const key = R.slice(1, Infinity, value);
                let param = R.prop(key, hyperParameters);
                if(!param){
                    throw Error(`${key} not found in ${Object.keys(hyperParameters)}`);
                }
                return param;
            }
            return value;
        }
        const doReplaceIfMatch = R.curry(replaceIfMatch)(R.__, hyperParameters);
        function replaceHyperParameter(pipelineItem){
            if(R.is(Array, pipelineItem)){
                return pipelineItem.map(item=>replaceHyperParameter(item));
            }
            else if(R.is(Object, pipelineItem)){
                if(typeof(pipelineItem) === 'function'){//omg, js type detect!!!
                    return pipelineItem;
                }
                else{
                    let ret = {};
                    for(let key of Object.keys(pipelineItem)){
                        ret[key] = replaceHyperParameter(pipelineItem[key]);
                    }
                    return ret;
                }
            }
            else{
                return doReplaceIfMatch(pipelineItem);
            }
        }
        this.pipeline = replaceHyperParameter(this.basePipeline);
        console.log({basePipeline:this.basePipeline, pipeline: this.pipeline});
    }

    set HyperParameters(hyperParameters){
        this.hyperParameters = hyperParameters;
    }

    get HyperParameters(){
        return this.hyperParameters;
    }

    set SampleSize(numSamples){
        if(this.HyperParameters.SampleSize !== numSamples){
            this.HyperParameters.SampleSize = numSamples;
            this.hyperParameterAcquisition();
        }
    }

    get SampleSize(){
        return this.HyperParameters.SampleSize;
    }
};
export default PipelineHyperParametersMixins;