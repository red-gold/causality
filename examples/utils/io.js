const {IO} = require('causal-net-utils');
const io = new IO();
io.writeFile('./abc', '1233');
// var res = io.readFile('./abc');
// console.log({res});