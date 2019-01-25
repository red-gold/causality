import {Preprocessing} from 'causal-net.preprocessing';
import {termLogger} from 'causal-net.log';
let preprocessing = new Preprocessing();
termLogger.log(preprocessing.splitImageBuffer(new Buffer(10), 2));