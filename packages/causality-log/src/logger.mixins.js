import {default as BaseLogger } from './baseLogger';
import { assert } from 'causal-net.utils';
const LoggerMixins = (BasedClass)=> class extends BasedClass{
    
    set Logger(logger){
        assert.beInstanceOf(logger, BaseLogger);
        this.logger = logger;
    }
    
    get Logger(){
        if(!this.logger){
            throw Error('logger is not set');
        }
        return this.logger;
    }
};

export default LoggerMixins;