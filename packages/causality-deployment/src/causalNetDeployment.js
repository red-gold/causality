import { Event } from 'causal-net.core';
import { default as functor } from './functor';
import { platform } from 'causal-net.utils';

class CausalNetDeployment extends platform.mixWith( Event, [] ){
    
    constructor(functor){
        super();
        this.F = functor;
        this.R = functor.CoreFunctor;
    }

    set Emitter(emitter){
        this.deployEmitter = emitter;
    }

    get Emitter(){
        return this.deployEmitter;
    }

    set Listener(listener){
        this.deployListener = listener;
        this.on('inferencer', (infer)=>{
            this.deployEmitter(infer);
        })
    }
    
    get Listener(){
        return this.deployListener;
    }

    set Inferencer(inferencer){
        this.deployInferencer = inferencer;
        this.on('emitter', (emitValue)=>{
            let inferValue = this.deployInferencer(emitValue);
            this.emit('inferencer', inferValue);
        });
    }

    get Inferencer(){
        return this.deployInferencer;
    }

    async deploy(){
        return new Promise(async (resolve, reject)=>{
            let counter = 0;
            while(true){
                let emitValue = await this.Emitter();
                this.emit('emitter', emitValue);
                if(emitValue === null){
                    resolve(counter);
                }
                counter += 1;
            }
        });
    }
};

export default new CausalNetDeployment(functor);