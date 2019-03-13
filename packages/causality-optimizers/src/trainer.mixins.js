const TrainerMixins = (BasePipelineClass)=> class extends BasePipelineClass{
    
    get Optimizer(){
        if(!this.optimizer){
            throw Error('optimizer is not set');
        }
        return this.optimizer;
    }
    
    set Optimizer(optimizer){
        if(!optimizer){
            throw Error(`expect optimizer got ${optimizer}`);
        }
        this.optimizer = optimizer;
    }
    
    get OptimizerParameters(){
        if(!this.optimizerParameters){
            throw Error('optimizerParameters is not set');
        }
        return this.optimizerParameters;
    }
    
    set OptimizerParameters(optimizerParameters){
        if(!optimizerParameters){
            throw Error(`expect optimizerPameters got ${JSON.stringify(optimizerParameters)}`);
        }
        this.optimizerParameters = optimizerParameters;
    }
    
    get Trainer(){
        let optimizer = this.Optimizer;
        let optimizerPameters = this.OptimizerParameters;
        return optimizer(optimizerPameters);
    }
    
    get TrainableParameters(){
        if(!this.trainableParameters){
            throw Error('trainableParameters is not set');
        }
        return this.trainableParameters;
    }

    set TrainableParameters(trainableParameters){
        if(!trainableParameters){
            throw Error(`expect trainableParameters got ${trainableParameters}`);
        }
        this.trainableParameters = trainableParameters;
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

    
    
    setTrainerByConfig(netConfig){
        const Trainer = netConfig.Trainer;
        if(!Trainer){
            throw Error(`expect Trainer got ${Trainer}`);
        }
        const {Optimizer, OptimizerParameters, TrainableParameters} = Trainer;
        this.Optimizer = Optimizer;
        this.OptimizerParameters = OptimizerParameters;
        if(TrainableParameters){
            this.TrainableParameters = TrainableParameters;
        }
    }
};

export default TrainerMixins;