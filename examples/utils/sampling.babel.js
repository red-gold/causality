import {Sampling} from 'causal-net.utils';
console.log({Sampling});
console.log(Sampling.choice(10,10));
console.log(Sampling.choice(['a','b','c'],3));
console.log(Sampling.choice(['a','b','c'],1, [0,0,1]));