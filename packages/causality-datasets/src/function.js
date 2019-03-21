import { Function as BaseFunction} from 'causal-net.core';
import { Platform } from 'causal-net.utils';
import { default as FunctionMixins} from './function.mixins';
export default class Function extends Platform.mixWith(BaseFunction,[FunctionMixins]){
    constructor(){
        super();
    }
}