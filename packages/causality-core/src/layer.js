import {default as Function} from './function';
import {default as BaseTensor} from './tensor';
import { CallbackConstructorRegistry } from '@tensorflow/tfjs-layers/dist/base_callbacks';
export default class Layer extends BaseTensor{
    constructor(){
        super();
        this.f = new Function();
        this.R = this.f.Function;
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
        const R = this.R;
        const _pipe = R.filter(p=>p,R.map(pipe=>({[pipe.Name]:pipe.Parameters}), pipeline));
        const pipeParameters = R.pluck('Parameters', _pipe);
        console.log({_pipe, pipeParameters});
        const doSetOrInitParam = (pipeParams, netParams)=>{
            const keyVar = R.map(R.__, R.toPairs(pipeParams))((key, value)=>{
                if(R.type(Array, value)){
                    console.log({obj:{key: value}});
                    return [key, val];
                    return doSetOrInitParam(par, R.propOr(key, value, {}));
                }
                else{
                    const v = R.propOr(key, value, null);
                    if(val){
                        return [key, false];
                    }
                    else{
                        return [key, true];
                    }
                }
            });
            return R.fromPairs(keyVar);
        };
        doSetOrInitParam(pipeParameters, netParams);
    }
}