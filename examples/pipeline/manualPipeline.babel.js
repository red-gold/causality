
const Pipeline = {
    Dataset: {
        Source: async ()=>{

        },
        Preprocessing: {
            Label:()=>{},
            Sample:()=>{}
        },
        Feeder:{
            Train: ()=>{},
            Test: ()=>{}
        },
    },
    Net:{
        HyperParameters: { SampleSize:10 },
        Parameters: async ()=>{},
        Layer: { 
            Predict: [], 
            Encode: [], 
            Decode: [] 
        },
        Model: { 
            Fit: ()=>{}, 
            Loss: ()=>{},
            Encode: ()=>{},
            Decode: ()=>{},
            Predict: ()=>{},
            OneHotPredict: ()=>{}
        },
        Optimizer: {
            Method: ()=>{},
            OptimizerParameters: {},
            TrainableParameters: undefined
        }
    },
    Deploy: {
        Input: ()=>{

        },
        InputPreprocessing: ()=>{ 

        },
        NetParameters: async ()=>{

        },
        Ouput: ()=>{

        }
    }
}

(async ()=>{

})();