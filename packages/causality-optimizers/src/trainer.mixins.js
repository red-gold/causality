import { Tensor } from 'causal-net.core';
import { assert } from 'causal-net.utils';
const TrainerMixins = (BasePipelineClass)=> class extends BasePipelineClass{
    
    get Optimizer(){
        if(!this.optimizer){
            throw Error('optimizer is not set');
        }
        return this.optimizer;
    }
    
    get OptimizerParameters(){
        return this.optimizerParameters;
        return this.Optimizer.Params;
    }

    get TrainableParameters(){
        if(!this.trainableParameters){
            throw Error('trainableParameters is not set');
        }
        return this.trainableParameters;
    }

    set Trainer(trainer){
        const { Optimizer, OptimizerParameters, TrainableParameters } = trainer;
        this.OptimizerParameters = OptimizerParameters;
        this.Optimizer = Optimizer;
        if(TrainableParameters){
            this.TrainableParameters = TrainableParameters;
        }
    }

    set Optimizer(optimizer){
        let params = this.OptimizerParameters;
        this.optimizer = optimizer(params);
    }

    set OptimizerParameters(optimizerParameters){
        assert.beInstanceOf(optimizerParameters, Object);
        this.optimizerParameters = optimizerParameters;
    }

    set TrainableParameters(trainableParameters){
        assert.beInstanceOf(trainableParameters, Array);
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
        this.Trainer = netConfig.Trainer;
    }
};

export default TrainerMixins;