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
        const pipeParameters = R.filter(v=>v!==undefined,R.map(pipe=>({[pipe.Name]:pipe.Parameters}), pipeline));
        console.log({pipeParameters, netParams});
        // return R.mergeDeepWith
    }
}