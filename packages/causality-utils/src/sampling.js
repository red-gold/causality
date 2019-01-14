import random from'random';
export default class Sampling{
    constructor(){
        this.random = random;    
    }
    get CoreRandom(){
        return this.random;
    }
    static makeCheckEnough(size){
        return (sample)=>sample.length<size;    
    }
    static range(size){
        return Array.from(new Float32Array(size)).map((v,i)=>i);
    }
    
    static choice(a, size, replace=false, p=null){
        let domain = Array.isArray(a)?a.slice(0):Sampling.range(a);
        console.log({domain});
        if(size>domain.length && replace === true){
            throw Error('sample size shall not bigger than domain length without replacing');
        }
        let samples = [];
        const GetUtilEnough = Sampling.makeCheckEnough(size);
        let idx = -1;
        while(GetUtilEnough(samples)){
            idx = random.int(0, domain.length-1);
            if(domain[idx]!==null){
                samples = [...samples, domain[idx]];
                if(!replace){
                    domain[idx]=null;//non replaceable
                }
            }
        }    
        return samples;
    }
}