import BaseRepresentation from "./baseRepresentation";
import {default as WordEmbedEnMixins} from "./WordEmbeddingEnglish.mixins";
import {Platform, Fetch} from 'causal-net.utils';
export default class WordEmbedding extends Platform.mixWith(BaseRepresentation, [WordEmbedEnMixins]){
    constructor(){
        super();
        this.Fetch = Fetch;
    }
}