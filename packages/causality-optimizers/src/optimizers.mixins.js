const OptimizerMixins = (BasePipelineClass)=> class extends BasePipelineClass{
    get Optimizers(){
        this.optimizers;
    }
    set Optimizers(optimizers){
        this.optimizers = optimizers;
    }

    set OptimizerUpdate(){

    }

    get OptimizerUpdate(){

    }

    set OptimizerParameters(){
        this.optimizers
    }

    get OptimizerParameters(){

    }

    setOptimizerByConfig(netConfig){
        const {} = netConfig.Optimizer;
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

export default OptimizerMixins;