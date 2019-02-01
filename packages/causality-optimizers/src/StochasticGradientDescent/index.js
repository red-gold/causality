import {default as AdamOptimizer} from './adamOptimizer';
let causalNetOptimizerSGD = {
    adam: (params)=>{
        return new AdamOptimizer(LearningRate, Beta1, Beta2, Epsilon); 
    }
}