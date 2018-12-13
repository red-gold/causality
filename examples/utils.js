var {F, IO} = require('causal-net-utils');
const f = new F();
var item = {'k1': {'k2': [1,2,3,4]}};
console.log(f.getIn(['k1', 'k2'], item, null));
console.log(f.setIn(['k1', 'k2', 0], 2,  item, null));
const io = new IO();
io.PIDExport();
const data = io.PNGReadSync('./tmp_datasets/out.png')
console.log({len: data.length});
var subImage = data.slice(0, 28*28*4);
io.PNGWrite(subImage, 28, 28, './tmp_datasets/01.png');