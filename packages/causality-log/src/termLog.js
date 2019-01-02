import {default as BaseLog} from './baseLog';
import {default as mixinLogNode} from './mixinLogNode';
import {default as mixinWebNode} from './mixinLogWeb';
import {Platform} from 'causal-net.utils';
export default class TermLog extends Platform.mixWith(BaseLog, {'node':[mixinLogNode],'web':[mixinWebNode]}){
    constructor(prefix){
        super(prefix);
    }
}