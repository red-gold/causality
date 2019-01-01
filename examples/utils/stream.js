const {Stream} = require('causal-net.utils');
const ST = new Stream();
let reader = ST.makeReadable();

const TranformFn = (chunkData, chunkEncoding, afterTransformFn) =>{
    let content = (chunkData.x+1.5).toString();
    let event = null;
    afterTransformFn(event, content);
};
let transformer = ST.makeTransform(TranformFn);

const WriteFn = (chunkData, chunkEncoding, callback) =>{
    console.log(chunkData.toString(), chunkEncoding);
    callback();
};
let writer = ST.makeWritable(WriteFn);

reader.pipe(transformer).pipe(writer);

setInterval(() => {
    reader.push({ x: Math.random() });
}, 100);