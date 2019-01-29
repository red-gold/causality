import { Function as BaseFunction } from 'causal-net.core';
import { Platform, Stream } from 'causal-net.utils';
class NLPPreprocessing extends Platform.mixWith(BaseFunction, [Stream]){
    constructor(){
        super();
    }
}

export default new NLPPreprocessing;