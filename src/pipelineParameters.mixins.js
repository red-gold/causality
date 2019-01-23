const PipelineParametersMixins = (PipelineClass)=> class extends PipelineClass{ 
    constructor(netConfigure){
        this.saveModelDir = '/saveModel/';
    }
    createNet(netParams){
        this.netParams = this.setOrInitParams(this.BasePipeline, netParams);
    }
    async extractParams(params){
        const F = this.F, R = this.R;
        const Traveller = async (params, fn)=>{
            if(F.isTensor(params)){
                return await fn(params);
            }
            else{
                let kVals = R.toPairs(params);
                let res = {};
                for(let [k, val] of kVals){
                    res[k] = await Traveller(val); 
                }
                return res;
            }
        }
        return Traveller(params);
    };
    async netSummary(){
        const Fn = (param)=>Array.from(await params.mean().data);
        return extractParams(this.netParams, Fn);
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

    async getParams(asObject=true){
        let params = await extractParams(this.netParams,(param)=>(Array.from(await param.data())) );
        if(asObject){
            return params;
        }
        else{
            return JSON.stringify(params);
        }
    }
    async getSavedParams(){
        let fileList = await this.storage.getFileList(this.saveModelDir);
        return fileList.map(fileName=>fileName.replace(this.saveModelDir,''));
    }
    async saveParams(fileName){
        const params = await this.getParams();
        await this.storage.writeFile(this.saveModelDir + fileName, JSON.stringify(params));
        return params;
    }
    async loadParams(fileName, params=null){
        if(!params){
            let _params = await this.storage.readFile(this.saveModelDir+fileName);
            params = JSON.parse(_params);
        }
        this.netParams = this.setOrInitParams(this.BasePipeline, params);
        return await this.getParams(false);
    }
};

export default PipelineParametersMixins;