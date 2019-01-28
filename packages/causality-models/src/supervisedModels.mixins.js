const ModelsMixins = (BasePipelineClass)=> class extends BasePipelineClass{
    get Models(){
        this.models;
    }
    set Models(models){
        this.models = models;
    }
    get Loss(){
        return this.modelLoss;
    }
    set Loss(loss){
        this.modelLoss = loss;
        this.modelLoss.bind(this);
    }

    get Predict(){
        return this.modelPredict;
    }
    set Predict(predict){
        this.modelPredict = predict;
        this.modelPredict.bind(this);
    }

    get Fit(){
        return this.modelFit;
    }
    set Fit(fit){
        this.modelFit = fit;
        this.modelFit.bind(this);
    }

    get NumClasses(){
        return this.modelNumClasses;
    }
    set NumClasses(numClasses){
        this.modelNumClasses = numClasses;
    }

    get OneHotPredict(){
        return (samples)=>this.modelOneHotPredict(samples, this.NumClasses);
    }
    set OneHotPredict(oneHotPredict){
        this.modelOneHotPredict = oneHotPredict;
        this.modelOneHotPredict.bind(this);
    }

    setModelLossByConfig(netConfig){
        const NumClasses = netConfig.NumClasses;
        const {Loss, Predict, OneHotPredict, Fit} = netConfig.Model;
        if(!Loss){
            throw Error('Loss must be defind as a tensor function or acquire from CausalNet.models');
        }
        if(typeof(Loss) === 'function'){
            this.Loss = Loss;
        }
        else{
            throw Error('not knowning yet');
        }
        if(typeof(Fit) === 'function'){
            this.Fit = Fit;
        }
        else{
            throw Error('not knowning yet');
        }
        if(typeof(Predict) === 'function'){
            this.Predict = Predict;
        }
        else{
            throw Error('not knowning yet');
        }
        if(typeof(OneHotPredict) === 'function'){
            this.OneHotPredict = OneHotPredict;
        }
        else{
            throw Error('not knowning yet');
        }
        if(NumClasses > 0){
            this.NumClasses = NumClasses;
        }
        else{
            throw Error('NumClasses from netConfig must be non zero, positive number');
        }
    }
};

export default ModelsMixins;