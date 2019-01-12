import {Preprocessing} from 'causal-net.preprocessing';
import {Logger} from 'causal-net.log';
let preprocessing = new Preprocessing();
Logger.log(preprocessing.splitImageBuffer(new Buffer(10), 2));