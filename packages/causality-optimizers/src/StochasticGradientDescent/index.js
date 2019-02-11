import {default as AdamOptimizer} from './adamOptimizer';
let causalNetSGDOptimizer = {
    adam: (optimizerParams)=>{
        return new AdamOptimizer(optimizerParams); 
    }
};
export default causalNetSGDOptimizer;