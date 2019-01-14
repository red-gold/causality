import {Logger} from 'causal-net.log';
Logger.log('this is text');
Logger.log({'name':'this is text'});
Logger.log({'father':{'name':'this is text','alias':'this is another text'}});
Logger.log({'father':{'name':{sub:'this is text'},'alias':'this is another text'}});
Logger.log({'array':[0,1,2,3,4]});
Logger.log({'array':[{a:0}, {b:1}, {c:2},  {d:4},  {e:6}]});