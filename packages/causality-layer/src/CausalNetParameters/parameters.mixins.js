const NetParametersMixins = (BaseParameterClass)=> class extends BaseParameterClass{ 
    
    get PredictParameters(){
        if(!this.parameters || !this.parameters.encode){
            throw Error('parameters is not set');
        }
        return this.parameters.encode;
    }
    
    get EncodeParameters(){
        if(!this.parameters || !this.parameters.encode){
            throw Error('parameters is not set');
        }
        return this.parameters.encode;
    }
    
    get DecodeParameters(){
        if(!this.parameters || !this.parameters.decode){
            throw Error('parameters is not set');
        }
        return this.parameters.decode;
    }
    
    set PredictParameters(predictParameters){
        return this.parameters.predict = predictParameters;
    }
    
    set EncodeParameters(encodeParameters){
        return this.parameters.encode = encodeParameters;
    }
    
    set DecodeParameters(decodeParameters){
        return this.parameters.decode = decodeParameters;
    }
    
    get SaveModelDir(){
        return 'saveModel/';
    }
    
    exportParameters(){
        if(!this.parameters){
            throw Error('parameter must be set');
        }
        return (async ()=>{
            const Fn = async (param)=>(Array.from(await param.data()));
            let params = await this.extractParamFromTensorDict(this.parameters, Fn);
            return params;
        })();
    }
    
    async extractParamFromTensorDict(params, fn){
        const F = this.F, R = this.R;
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
        return Traveller(params, fn);
    };
    async parametersSummary(){
        if(!this.parameters){
            throw Error('parameter must be set');
        }
        const Fn = async (param)=>Array.from(await param.mean().data());
        return await this.extractParamFromTensorDict(this.parameters, Fn);
    }
    setOrInitParams(pipeline, netParams){
        const R = this.R, T = this.T, F = this.F;
        let pipeParams = R.fromPairs(R.filter(([k,v])=>v !== undefined,
                                R.map(R.__, pipeline)(p=>[p.Name, p.Parameters])));
        const SetOrInit = (mainValue, subVal)=>{
            let keys = R.keys(mainValue);
            let keyMainValSubVal = R.map((k)=> [k, R.prop(k, mainValue), R.propOr(null, k, subVal)], keys);
            const ValMapping = ([key, mainVal, subVal])=>{
                if(F.isParameter(mainVal)){
                    const paramShape = mainVal;
                    if(R.isNil(subVal)){
                        return [key, T.variable(T.randomNormal(paramShape))];
                    }
                    else{
                        return [key, T.variable(T.tensor(subVal).reshape(paramShape))];
                    }
                }
                else{
                    return [key, SetOrInit(mainVal, subVal)];
                }
            };
            return R.fromPairs(R.map(ValMapping, keyMainValSubVal));
        };
        return SetOrInit(pipeParams, netParams);
    }

    async getSavedParams(){
        const Storage = this.Storage, SaveDir = this.SaveModelDir;
        let fileList = await Storage.getFileList(SaveDir);
        return fileList.map(fileName=>fileName.replace(SaveDir,''));
    }

    async saveParams(fileName){
        let params = await this.Parameters;
        const SaveDir = this.SaveModelDir;
        await this.storage.writeFile(SaveDir + fileName, JSON.stringify(params));
        return params;
    }
    async loadParams(fileName){
        const SaveDir = this.SaveModelDir;
        let strParams = await this.storage.readFile(SaveDir+fileName);
        let params = JSON.parse(strParams);
        this.Parameters = params;
        return await this.Parameters;
    }
};

export default NetParametersMixins;