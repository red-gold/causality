import { termLogger, vivid } from 'causal-net.log';

termLogger.log('this is text');
termLogger.log({'name':'this is text'});

termLogger.log({'father':{'name':'this is text','alias':'this is another text'}});
termLogger.log({'father':{'name':{sub:'this is text'},'alias':'this is another text'}});
termLogger.Level = 'warning';
termLogger.log({'array':[0,1,2,3,4]});
termLogger.log({'array':[{a:0}, {b:1}, {c:2},  {d:4},  {e:6}]});
termLogger.Level = 'debug';

console.log(termLogger.Level);
termLogger.log({'not to show': true});

termLogger.progressBegin(5);
for(let i of [1,2,3,4,5]){
    termLogger.progressUpdate({current: i});
}
termLogger.progressEnd();

termLogger.groupBegin('group A');
termLogger.groupBegin('group B');
termLogger.groupBegin('group C');
termLogger.groupEnd();
termLogger.groupEnd();
termLogger.groupEnd();

termLogger.plot({data: [1,2,3,4], type: 'line'});

termLogger.plot({data: [[1,0],[2, 0],[3, 0], [4,0]], type: 'scatter'});
