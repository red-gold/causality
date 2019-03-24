const ParameterMixins = (BaseParameterClass)=> class extends BaseParameterClass{ 
    
    get PredictParameters(){
        if(!this.parameters || !this.parameters.Predict){
            throw Error('parameters is not set');
        }
        return this.parameters.Predict;
    }
    
    get EncodeParameters(){
        if(!this.parameters || !this.parameters.Encode){
            throw Error('parameters is not set');
        }
        return this.parameters.Encode;
    }
    
    get DecodeParameters(){
        if(!this.parameters || !this.parameters.Decode){
            throw Error('parameters is not set');
        }
        return this.parameters.Decode;
    }
    
    set PredictParameters(predictParameters){
        this.parameters = (this.parameters)? this.parameters: {};
        this.parameters.Predict = predictParameters;
    }
    
    set EncodeParameters(encodeParameters){
        this.parameters = (this.parameters)? this.parameters: {};
        this.parameters.Encode = encodeParameters;
    }
    
    set DecodeParameters(decodeParameters){
        this.parameters = (this.parameters)? this.parameters: {};
        this.parameters.Decode = decodeParameters;
    }

    set ParameterSizes(parameterSizes){
        this.parameterSizes = parameterSizes;
    }

    get ParameterSizes(){
        if(!this.parameterSizes){
            throw Error('parameterSizes is not set');
        }
        return this.parameterSizes;
    }
    
    get SaveModelDir(){
        return 'saveModel/';
    }
    
    exportParameters(){
        if(!this.parameters){
            throw Error('parameter is not set');
        }
        return (async ()=>{
            const Fn = async (param)=>(Array.from(await param.data()));
            let params = await this.extractParamFromTensorDict(this.parameters, Fn);
            return params;
        })();
    }

    
    async extractParamFromTensorDict(params, fn){
        const R = this.R;
        const Traveller = async (params, fn)=>{
            if(this.isTensor(params)){
                return await fn(params);
            }
            else{
                let kVals = R.toPairs(params);
                let res = {};
                for(let [k, val] of kVals){
                    res[k] = await Traveller(val, fn); 
                }
                return res;
            }
        };
        return await Traveller(params, fn);
    }
    
    async parametersSummary(){
        if(!this.parameters){
            throw Error('parameter must be set');
        }
        const Fn = async (param)=>Array.from(await param.mean().data());
        return await this.extractParamFromTensorDict(this.parameters, Fn);
    }
    
    initParamSizesByLayers(layers){
        const R = this.R, T = this.T, F = this.F;
        const GetParamSize = R.compose(R.fromPairs, R.map(p=>[p.Name, p.Parameters]));
        const PredictSize = GetParamSize(F.getIn(['Predict'], layers, []));
        const EncodeSize  = GetParamSize(F.getIn(['Encode'], layers, []));
        const DecodeSize  = GetParamSize(F.getIn(['Decode'], layers, [])); 
        this.ParameterSizes = {PredictSize, EncodeSize, DecodeSize};
    }

    importParameters(paramObject){
        const T = this.T, R = this.R, F = this.F;
        console.log({paramObject});
        let predictParamObject = F.getIn(['Predict'], paramObject, {});
        let encodeParamObject  = F.getIn(['Encode'], paramObject, {});
        let decodeParamObject  = F.getIn(['Decode'], paramObject, {});
        const { PredictSize, EncodeSize, DecodeSize } = this.ParameterSizes;
        const SetOrInit = ( initPredict, paramObject )=>{
                    return F.parameterMapWithKey((keys, paramSize)=>{
                        let paramValue = this.F.getIn(keys, paramObject, null);
                        if(paramValue === null){
                            return T.variable(T.randomNormal(paramSize).asType('float32'));
                        }
                        else{
                            return T.variable(T.tensor(paramValue, paramSize, 'float32'));
                        }                        
                    }, initPredict);
                };
        this.PredictParameters = SetOrInit( PredictSize, predictParamObject );
        this.EncodeParameters  = SetOrInit( EncodeSize, encodeParamObject );
        this.DecodeParameters  = SetOrInit( DecodeSize, decodeParamObject ); 
    }

    setOrInitParams(layers, paramObject){
        this.initParamSizesByLayers(layers);
        this.importParameters(paramObject);
    }

    async getSavedParamList(){
        const Storage = this.Storage, SaveDir = this.SaveModelDir;
        let fileList = await Storage.getFileList(SaveDir);
        return fileList.map(fileName=>fileName.replace(SaveDir,''));
    }

    async saveParams(fileName){
        const SaveDir = this.SaveModelDir;
        const Storage = this.Storage;
        let params = await this.exportParameters();
        await Storage.writeFile(SaveDir + fileName, JSON.stringify(params));
        return params;
    }
    async loadParams(fileName){
        const Storage = this.Storage, SaveDir = this.SaveModelDir;
        let strParams = await Storage.readFile(SaveDir+fileName);
        let params = JSON.parse(strParams);
        this.importParameters(params);
        return await this.Parameters;
    }
};

export default ParameterMixins;