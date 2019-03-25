import { Tensor } from 'causal-net.core';
import { assert } from 'causal-net.utils';
const TrainerMixins = (BasePipelineClass)=> class extends BasePipelineClass{
    
    get Trainer(){
        const T = this.T;
        return (sampleTensor, labelTensor, Loss=this.LossModel, Optimizer=this.Optimizer)=>{
            const LossFn = ()=>{
                return T.tidy( ()=>{ return Loss(sampleTensor, labelTensor); } );
            };
            return Optimizer.fit(LossFn);
        };
    }

    get Optimizer(){
        if(!this.optimizer){
            throw Error('optimizer is not set');
        }
        return this.optimizer;
    }
    

    set Optimizer(optimizer){
        this.optimizer = optimizer;
    }

    get TrainData(){
        if(!this.trainData){
            throw Error('trainData is not set');
        }
        return this.trainData;
    }
    set TrainData(trainData){
        this.trainData = trainData;
    }

    train(numIter=10){
        for(let iter of new Array(numIter).map((d,i)=>i)){
            return 0;
        }
    }

    test(){

    }

    setByConfig(pipelineConfig){
        if(super.setByConfig){
            super.setByConfig(pipelineConfig);
        }
        this.logger.groupBegin('set Trainer by config');
        const Net = pipelineConfig.Net;
        if(!Net){
            throw Error(`Net is not set in ${JSON.stringify(pipelineConfig)}`);
        }
        const { Optimizer } = Net;
        if(!Optimizer){
            throw Error(`Model is not set in ${JSON.stringify(Net)}`);
        }
        this.Optimizer = Optimizer;
        if(!pipelineConfig.Dataset){
            throw Error(`Dataset is not set in ${JSON.stringify(pipelineConfig)}`);
        }
        this.TrainData = pipelineConfig.Dataset.TrainData;
        this.TestData = pipelineConfig.Dataset.TestData;
        this.ValidateData = pipelineConfig.Dataset.ValidateData;
        this.logger.groupEnd();
    }
};

export default TrainerMixins;