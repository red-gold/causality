const UnSupervisedModelsMixins = (BasePipelineClass)=> class extends BasePipelineClass{
    
    get Loss(){
        if(!this.modelLoss){
            throw Error('Loss is not set');
        }
        return this.modelLoss;
    }
    
    get Decode(){
        if(!this.modelDecode){
            throw Error('Predict is not set');
        }
        return this.modelDecode;
    }

    get Fit(){
        if(!this.modelFit){
            throw Error(`Fit is not set`);
        }
        return this.modelFit;
    }

    set Loss(loss){
        this.modelLoss = loss;
    }
    
    set Decode(decode){
        this.modelDecode = decode;
    }

    set Fit(fit){
        this.modelDecode = fit;
    }

    set OneHotPredict(oneHotPredict){
        this.modelOneHotPredict = oneHotPredict;
    }

    setModelByConfig(netConfig){
        const model = netConfig.Model;
        assert.beInstanceOf(model, BaseSupervisedModel);
        this.Loss = Loss;
        this.Fit = Fit;
        this.Predict = Predict;
        this.OneHotPredict = OneHotPredict;
    }
};

export default UnSupervisedModelsMixins;
