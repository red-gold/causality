import {Stream} from 'causal-net.utils';

let reader = Stream.makeReadable();

const TranformFn = (chunkData, chunkEncoding, afterTransformFn) =>{
    let content = (chunkData.x+1.5).toString();
    let event = null;
    afterTransformFn(event, content);
};
let transformer = Stream.makeTransform(TranformFn);

const WriteFn = (chunkData, chunkEncoding, callback) =>{
    console.log(chunkData.toString(), chunkEncoding);
    callback();
};
let writer = Stream.makeWritable(WriteFn);

reader.pipe(transformer).pipe(writer);

setInterval(() => {
    reader.push({ x: Math.random() });
}, 100);