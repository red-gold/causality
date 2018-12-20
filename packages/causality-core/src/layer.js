import {default as Function} from './function';
import {default as Tensor} from './tensor';
export default class Layer extends Tensor{
    constructor(){
        super();
        this.F = new Function();
        this.R = this.F.CoreFn;
    }   
    
    layer(value, layerConfigure, layerParameters, debug=()=>{}){
        const R = this.R;
        const {Name, Type, Parameters, Flow} = layerConfigure;
        debug({Name, Type, Parameters, Flow});
        const OpsRuner = R.addIndex(R.reduce)(R.__,{result: value, trace: {}}, Flow);
        var {result, trace} = OpsRuner(({result, trace}, node, idx)=>{
            if(node.Parameter){
                result = this.T[node.Op](result, layerParameters[node.Parameter], ...node.Args);
            }
            else{
                result = this.T[node.Op](result, ...node.Args);    
            };
            trace[idx] = result.shape;
            return {result, trace};
        });
        return {[Name]: result, trace};
    }

    setOrInitParams(pipeline, netParams, debug=()=>{}){
        const R = this.R, T = this.T, F = this.F;
        let pipeParams = R.fromPairs(R.filter(([k,v])=>v !== undefined,
                                R.map(R.__, pipeline)(p=>[p.Name, p.Parameters])));
        // console.log({pipeParams});
        const SetOrInit = (mainValue, subVal)=>{
            let keys = R.keys(mainValue);
            let keyMainValSubVal = R.map((k)=> [k, R.prop(k, mainValue), R.propOr(null, k, subVal)], keys);
            // console.log({keyMainValSubVal});
            const mapping = ([key, mainVal, subVal])=>{
                // console.log({key, mainVal, subVal});

                if(F.isParameter(mainVal)){
                    const paramShape = mainVal;
                    if(R.isNil(subVal)){
                        // console.log('init new');
                        
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
            return R.fromPairs(R.map(mapping, keyMainValSubVal));
        };
        return SetOrInit(pipeParams, netParams);
    }
}