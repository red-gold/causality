import {Preprocessing} from 'causal-net.preprocessing';
import {TermLog} from 'causal-net.log';
let logger = new TermLog();
let preprocessing = new Preprocessing();
logger.log(preprocessing.splitImageBuffer(new Buffer(10), 2));