import {default as TensorBackend} from './tensor';
import {default as F} from './function';
export default class Layer extends TensorBackend{
    constructor(){
        super();
        this.R = (new F())._;
    }   
    
    layer(value, layerConfigure, layerParameters, debug=()=>{}){
        let R = this.R;
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

}