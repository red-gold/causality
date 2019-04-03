import { Event } from 'causal-net.core';
import { default as functor } from './functor';
import { platform, assert } from 'causal-net.utils';

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
        if(!this.deployEmitter){
            throw Error('Emitter is not set');
        }
        return this.deployEmitter;
    }

    set Listener(listener){
        this.deployListener = listener;
        this.on('inferencer', (infer)=>{
            this.deployListener(infer);
        });
    }
    
    get Listener(){
        if(!this.deployListener){
            throw Error('Listener is not set');
        }
        return this.deployListener;
    }

    set Inferencer(inferencer){
        this.deployInferencer = inferencer;
        this.on('emitter', async (emitValue)=>{
            let inferValue = await this.deployInferencer(emitValue);
            this.emit('inferencer', inferValue);
        });
    }

    get Inferencer(){
        if(!this.deployInferencer){
            throw Error('Inferencer is not set');
        }
        return this.deployInferencer;
    }

    async deploy(){
        return new Promise(async (resolve, reject)=>{
            let counter = 0;
            let emitValue = await this.Emitter();
            while(emitValue !== null){
                this.emit('emitter', emitValue);
                counter += 1;
                emitValue = await this.Emitter();
            }
            resolve(counter);
        });
    }
}

export default new CausalNetDeployment(functor);