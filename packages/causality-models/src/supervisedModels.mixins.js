const SupervisedModelsMixins = (BasePipelineClass)=> class extends BasePipelineClass{
    
    get Loss(){
        if(!this.modelLoss){
            throw Error('Loss is not set');
        }
        return this.modelLoss;
    }
    
    get Predict(){
        if(!this.modelPredict){
            throw Error('Predict is not set');
        }
        return this.modelPredict;
    }

    get OneHotPredict(){
        if(!this.modelOneHotPredict){
            throw Error(`OneHotPredict is not set`);
        }
        return this.modelOneHotPredict;
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
    
    set Predict(predict){
        this.modelPredict = predict;
    }

    set Fit(fit){
        this.modelFit = fit;
    }

    set OneHotPredict(oneHotPredict){
        this.modelOneHotPredict = oneHotPredict;
    }

    setModelByConfig(netConfig){
        const model = netConfig.Model;
        assert.beInstanceOf(model, BaseSupervisedModel);
        this.Loss = model.loss;
        this.Fit = model.fit;
        this.Predict = model.predict;
        this.OneHotPredict = model.oneHotPredict;
    }
};

export default SupervisedModelsMixins;
