var isNode = require('is-node');

if(isNode){
    var R = require('ramda');
    var tf = require('@tensorflow/tfjs');
    require('@tensorflow/tfjs-node');
}
const SuppportBackend = {'tf': tf}
class TensorBackend{

    constructor(Config={Backend:'tf'}){
        this.T = SuppportBackend[Config.Backend];
    }
    get tensor(){
        return this.T;
    }
    pipelineLayer(Type, Val, Param, Flow, debug=()=>{}){
        console.log({Type, Val, Param, Flow, debug});
        const opsRuner = R.addIndex(R.reduce)(R.__,{result: Val, trace: {}}, Flow);
        var {result, trace} = opsRuner(({result, trace}, node, idx)=>{
            debug({idx, node});
            if(idx===0){
                result = this.T[node.Op](Val, Param, ...node.Args);
            }
            else{
                result = this.T[node.Op](result, ...node.Args);    
            }
            trace[idx] = result.shape
            return {result, trace}
        })
        console.log(trace); 
        return result;
    }
}

module.exports = {TensorBackend};