const PipelineParametersMixins = (PipelineClass)=> class extends PipelineClass{ 
    get Parameters(){
        if(!this.parameters){
            throw Error('parameter must be set');
        }
        return (async ()=>{
            const Fn = async (param)=>(Array.from(await param.data()));
            let params = await this.extractParamFromTensorDict(this.parameters, Fn);
            return params;
        })();
    }
    set Parameters(params){
        if(!this.basePipeline){
            throw Error('basepipeline must be set');
        }
        this.parameters = this.setOrInitParams(this.basePipeline, params);
    }
    async extractParamFromTensorDict(params, fn){
        const F = this.F, R = this.R;
        const Traveller = async (params, fn)=>{
            if(F.isTensor(params)){
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
        let fileList = await this.storage.getFileList(this.saveModelDir);
        return fileList.map(fileName=>fileName.replace(this.saveModelDir,''));
    }

    async saveParams(fileName){
        const params = await this.Parameters;
        await this.storage.writeFile(this.saveModelDir + fileName, JSON.stringify(params));
        return params;
    }
    async loadParams(fileName){
        let strParams = await this.storage.readFile(this.saveModelDir+fileName);
        let params = JSON.parse(strParams);
        this.Parameters = params;
        return await this.Parameters;
    }
};

export default PipelineParametersMixins;