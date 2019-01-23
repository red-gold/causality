const PipelineOptimizingMixins = (PipelineClass)=> class extends PipelineClass{ 
    constructor(...args){
        super();
        // this.flattenParams = this.flattenParams(this.netParams);
    }

    flattenParams(params){
        const R = this.R, F = this.F;
        const MapValues = (objOrArray)=>Array.isArray(objOrArray)?objOrArray:Object.values(objOrArray);
        const Flatten = (pv)=>{
            if(F.isTensor(pv)){
                return pv;
            }
            else{
                let values = MapValues(pv);
                let flatten = values.reduce((flatten, v)=>{
                    let res = Flatten(v);
                    if(R.is(Array, res)){
                        flatten = [...flatten, ...res];
                    }
                    else{
                        flatten = [...flatten, res];
                    }
                    return flatten;
                }, []);
                return flatten;
            }
        };
        let values = MapValues(params);
        
        return values.reduce((flatten,v)=>[...flatten, ...Flatten(v)],[]);
    }
    /**
     * @param  {} sampleBatch
     * @param  {} labelBatch
     * @param  {} numSample
     */
    loss(batchSamples, batchLabels, numSample){
        const T = this.T;
        let sampleTensor = T.tensor(batchSamples).reshape([numSample, -1]).asType('float32'); 
        let labelTensor  = T.tensor(batchLabels).reshape([numSample, -1]);
        const {logProb} = this.makePredict(sampleTensor, numSample);
        const likelihood = logProb.neg().mul(labelTensor);
        const loss = likelihood.mean();
        return loss;
    };
    makeOptimizer(method='adam', args=[0.02]){        
        this.optimizer = this.T.train[method](...args);
        return this.optimizer;
    }
};

export default PipelineOptimizingMixins;