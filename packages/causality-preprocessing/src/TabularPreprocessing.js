import { Function as BaseFunction } from 'causal-net.core';
import { Platform, Stream } from 'causal-net.utils';
import 
class TabularPreprocessing extends Platform.mixWith(BaseFunction, []){
    constructor(){
        this.Stream = Stream;
    }
}

export default new TabularPreprocessing;