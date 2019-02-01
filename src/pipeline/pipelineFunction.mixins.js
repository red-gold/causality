const PipelineFunctionMixins = (FunctionClass)=> class extends FunctionClass{ 
    range(len){
        return this.R.range(0, len);
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
    
    getTraverse(){
        return R.curry(function(keys, item){
            R.pipe.apply(null, R.map(R.prop, keys))(item);
        }); 
    }
    
    isTensor(object){
        return object.size !== undefined && object.shape !== undefined && object.dtype !== undefined;
    }
};

export default PipelineFunctionMixins;