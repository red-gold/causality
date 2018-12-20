var {Function, Layer} = require('causal-net-core');
const F = new Function();
const L = new Layer();
const R = F.coreFn;
const T = L.coreTs;
var tf1 = T.tensor([1,2,3,4]);
tf1.dataSync();