const UnSupervisedModelsMixins = (BasePipelineClass)=> class extends BasePipelineClass{
    

    get LossModel(){
        if(!this.netModel){
            throw Error('netModel is not set');
        }
        return this.netModel.Loss;
    }

    get FitModel(){
        if(!this.netModel){
            throw Error('netModel is not set');
        }
        return this.netModel.Fit;
    }
    
    get OneHotPredictModel(){
        if(!this.netModel){
            throw Error('netModel is not set');
        }
        return this.netModel.OneHotPredict;
    }

    get PredictModel(){
        if(!this.netModel){
            throw Error('netModel is not set');
        }
        return this.netModel.Predict;
    }

    get EncodeModel(){
        if(!this.netModel){
            throw Error('netModel is not set');
        }
        return this.netModel.Encode;
    }

    get DecodeModel(){
        if(!this.netModel){
            throw Error('netModel is not set');
        }
        return this.netModel.Decode;
    }

    

    set Model(model){        
        this.netModel = model;
        this.netModel.Net = this.Net;
    }

    setByConfig(pipelineConfig){
        if(super.setByConfig){
            super.setByConfig(pipelineConfig);
        }
        this.logger.groupBegin('set Model by config');
        const Net = pipelineConfig.Net;
        if(!Net){
            throw Error(`Net is not set in ${JSON.stringify(pipelineConfig)}`);
        }
        const { Model } = Net;
        if(!Model){
            throw Error(`Model is not set in ${JSON.stringify(Net)}`);
        }
        this.Model = Model;
        this.logger.groupEnd();
    }
};

export default UnSupervisedModelsMixins;
