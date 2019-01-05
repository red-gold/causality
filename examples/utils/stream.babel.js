import {Stream} from 'causal-net.utils';

function st1(delay){
    let reader = Stream.makeReadable();
    
    const TranformFn = (chunkData, chunkEncoding, afterTransformFn) =>{
        chunkData.x = (chunkData.x+1.5);
        let event = null;
        afterTransformFn(event, chunkData);
    };
    let transformer = Stream.makeTransform(TranformFn);
    
    const WriteFn = (chunkData, chunkEncoding, callback) =>{
        console.log({[delay]:chunkData});
        callback();
    };
    let writer = Stream.makeWritable(WriteFn);
    
    reader.pipe(transformer).pipe(writer);
    
    setInterval(() => {
        reader.push({ x: Math.random() });
    }, delay);
}
// st1(100);
// st1(200);
function std1(delay){
    const WriteDuplexFn = (chunkData, chunkEncoding, callback) =>{
        console.log({[delay]:{duplex: {chunkData}}});
        callback();
    };
    let duplexer = Stream.makeDuplex(WriteDuplexFn);
    
    const TranformFn = (chunkData, chunkEncoding, afterTransformFn) =>{
        chunkData.x = (chunkData.x+1.5);
        let event = null;
        afterTransformFn(event, chunkData);
    };
    let transformer = Stream.makeTransform(TranformFn);
    
    duplexer.pipe(transformer).pipe(duplexer);
    
    setInterval(() => {
        duplexer.push({ x: Math.random() });
    }, delay);
}
// std1(1000);
async function streamWithEnd(delay){
    function WriteDuplexFn(chunkData, chunkEncoding, callback){
        console.log({[delay]:{duplex: {chunkData}}});
        callback();
    };
    let duplexer = Stream.makeDuplex(WriteDuplexFn);
    
    const TranformFn = (chunkData, chunkEncoding, afterTransformFn) =>{
        chunkData.x = (chunkData.x+1.5);
        let event = null;
        afterTransformFn(event, chunkData);
    };
    let transformer = Stream.makeTransform(TranformFn);

    let counter = 0;
    let handler = setInterval(() => {
        // console.log({counter});
        if(counter >= 10){
            duplexer.push(null);
            clearInterval(handler);
        }
        else{
            counter += 1;
            duplexer.push({ x: Math.random() });
        }
    }, delay);
    let res = await Stream.makePipeline([duplexer, transformer, duplexer],(data)=>{console.log(data);data.x=data.x+10;});
    return res;
}

// streamWithEnd(100)
// .then((res)=>{
//     console.log({res});
// });
async function readWriteStream(delay){
    let reader = Stream.makeReadable();
    
    const TranformFn = (chunkData, chunkEncoding, afterTransformFn) =>{
        chunkData.x = (chunkData.x+1.5);
        let event = null;
        afterTransformFn(event, chunkData);
    };
    let transformer = Stream.makeTransform(TranformFn);
    
    const WriteFn = (chunkData, chunkEncoding, callback) =>{
        console.log({[delay]:chunkData});
        callback();
    };
    let writer = Stream.makeWritable(WriteFn);
    
    // reader.pipe(transformer).pipe(writer);
    
    let counter = 0;
    let handler = setInterval(() => {
        // console.log({counter});
        if(counter >= 10){
            reader.push(null);
            clearInterval(handler);
        }
        else{
            counter += 1;
            reader.push({ x: Math.random() });
        }
    }, delay);
    let res = await Stream.makePipeline([reader, transformer, writer],(data)=>{console.log(data);data.x=data.x+10;});
    return res;
}
readWriteStream(100).then(res=>{
    console.log({res});
});
