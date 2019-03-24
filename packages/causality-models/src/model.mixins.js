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

    get Encode(){
        if(!this.modelEncode){
            throw Error('Predict is not set');
        }
        return this.modelEncode;
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

    set Encode(encode){
        this.modelEncode = encode;
    }

    set Fit(fit){
        this.modelFit = fit;
    }

    get OneHotPredict(){
        if(!this.modelOneHotPredict){
            throw Error('modelOneHotPredict is not set');
        }
        return this.modelOneHotPredict;
    }

    set OneHotPredict(oneHotPredict){
        this.modelOneHotPredict = oneHotPredict;
    }

    get Predict(){
        if(!this.modelPredict){
            throw Error('modelPredict is not set');
        }
        return this.modelPredict;
    }

    set Predict(predict){
        this.modelPredict = predict;
    }
    

    netPredict(inputTensor){
        console.log({modelPredict: this.modelPredict});
        const PredictRunner = this.NetRunner.PredictRunner;
        return this.modelPredict(inputTensor, { PredictRunner });
    }

    netEncode(inputTensor){
        let encodeRunner = this.EncodeRunner;
        return this.Encode(inputTensor, encodeRunner);
    }

    netDecode(inputTensor){
        let decodeRunner = this.DecodeRunner;
        return this.Decode(inputTensor, decodeRunner);
    }

    getModelFromConfig(netConfig){
        const { Loss, Fit, Predict, OneHotPredict, Encode, Decode } = netConfig.Net.Model;
        console.log({ Loss, Fit, Predict, OneHotPredict, Encode, Decode });
        this.Loss = Loss;
        this.Fit = Fit;
        this.Predict = Predict;
        this.OneHotPredict = OneHotPredict;
        this.Encode = Encode;
        this.Decode = Decode;
    }
};

export default UnSupervisedModelsMixins;
