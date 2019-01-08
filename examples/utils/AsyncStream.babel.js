import {Stream} from 'causal-net.utils';

function st1(delay){
    let reader = Stream.makeReadable();
    
    const TranformFn = (chunkData, chunkEncoding, afterTransformFn) =>{
        setTimeout(() => {
            chunkData.x = (chunkData.x+1.5);
            let event = null;
            console.log({transform:chunkData});
            afterTransformFn(event, chunkData);
        }, 1000);
    };
    let transformer = Stream.makeTransform(TranformFn);
    
    const WriteFn = (chunkData, chunkEncoding, callback) =>{
        setTimeout(() => {
            console.log({[delay]:chunkData});
            callback();    
        }, 2000);
    };
    let writer = Stream.makeWritable(WriteFn);
    
    Stream.makePipeline([reader,transformer,writer]);
    reader.on('data',(data)=>{
        console.log({data});
    })
    
    setInterval(() => {
        reader.push({ x: Math.random() });
    }, delay);
}
st1(100);