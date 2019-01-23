const PipelineOptimizingMixins = (PipelineClass)=> class extends PipelineClass{ 
    
    set Optimizer(optimizer){
        this.optimizer = optimizer;
    }
    get Optimizer(){
        this.optimizer;
    }

    setDefaultOptimizer(){
        this.optimizer = this.makeOptimizer();
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
    
    makeOptimizer(method='adam', args=[0.02]){        
        this.optimizer = this.T.train[method](...args);
        return this.optimizer;
    }
};

export default PipelineOptimizingMixins;