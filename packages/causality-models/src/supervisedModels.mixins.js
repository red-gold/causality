const SupervisedModelsMixins = (BasePipelineClass)=> class extends BasePipelineClass{
    
    get Loss(){
        if(!this.modelLoss){
            throw Error('modelLoss is not set');
        }
        return this.modelLoss;
    }
    set Loss(loss){
        if(!loss || typeof(Loss) !== 'function'){
            throw Error(`expect loss, got ${JSON.stringify(loss)}`);
        }
        this.modelLoss = loss;
        this.modelLoss.bind(this);
    }

    get Predict(){
        if(!this.modelPredict){
            throw Error('modelPredict is not set');
        }
        return this.modelPredict;
    }
    set Predict(predict){
        if(!predict){
            throw Error(`expect predict, got ${predict}`);
        }
        this.modelPredict = predict;
        this.modelPredict.bind(this);
    }

    get Fit(){
        if(!this.modelFit){
            throw Error(`modelFit is not set`);
        }
        return this.modelFit;
    }
    set Fit(fit){
        if(!fit || typeof(fit) !== 'function' ){
            throw Error(`expect fit, got ${JSON.stringify(fit)}`);
        }
        this.modelFit = fit;
        this.modelFit.bind(this);
    }

    get NumClasses(){
        return this.modelNumClasses;
    }
    set NumClasses(numClasses){
        if(typeof(numClasses) !== 'number' || numClasses <= 0){
            throw Error(`expect numClasses, got ${JSON.stringify(numClasses)}`);
        }
        this.modelNumClasses = numClasses;
    }

    get OneHotPredict(){
        return (samples)=>this.modelOneHotPredict(samples, this.NumClasses);
    }
    set OneHotPredict(oneHotPredict){
        if(!oneHotPredict || typeof(oneHotPredict) !== 'function' ){
            throw Error(`expect oneHotPredict, got ${JSON.stringify(oneHotPredict)}`);
        }
        this.modelOneHotPredict = oneHotPredict;
        this.modelOneHotPredict.bind(this);
    }

    setModelByConfig(netConfig){
        const NumClasses = netConfig.NumClasses;
        const {Loss, Predict, OneHotPredict, Fit} = netConfig.Model;
        this.Loss = Loss;
        this.Fit = Fit;
        this.Predict = Predict;
        this.OneHotPredict = OneHotPredict;
        this.NumClasses = NumClasses;
    }
};

export default SupervisedModelsMixins;
