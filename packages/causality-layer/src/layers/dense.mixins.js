const DenseLayerMixins = (PipelineClass)=> class extends PipelineClass{
    dense(name, inputSize, outputSize){
        return { 
            Name: name, Type: 'Layer',
            Parameters: { Weight: [inputSize, outputSize], Bias: [outputSize] },
            Net: function(value, params){
                    let {Weight, Bias} = params;
                    let result = value.dot(Weight).add(Bias);
                    // var methods = [];
                    // for(let m in result){
                    //     methods.push(m);
                    // }
                    // console.log(methods);
                    return result;
                }
            };
    }
};
export default DenseLayerMixins;