import { Functor as BaseFunctor } from 'causal-net.core';
import { platform } from 'causal-net.utils';
import { ItemNormalizing, NullItemReplace } from './Tabular/index';
class TabularPreprocessing extends platform.mixWith(BaseFunctor, 
    []){
    constructor(){
        super();
    }
}

export default new TabularPreprocessing;