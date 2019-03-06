import stream from 'readable-stream';
/**
 * 
 * @class Stream
 */
class Stream{
    constructor(){
        this.stream = stream;
    }
    
    makeReadable(readFn=null){
        let reader = new stream.Readable({objectMode: true});
        const DefaultReader = ()=>{};
        reader._read = readFn || DefaultReader;
        return reader;
    }
     
    wrapReadable(readableObj){
        let reader = new stream.Readable();
        reader.wrap(readableObj);
        return reader;
    }

    makeWritable(writeFn){
        let writer = new stream.Writable({objectMode: true});
        writer._write = writeFn;
        return writer;
    }

    makeDuplex(writeFn, readFn=null){
        let duplex = new stream.Duplex({objectMode: true});
        duplex._write = writeFn;
        const DefaultReader = ()=>{};
        duplex._read = readFn || DefaultReader;
        return duplex;
    }

    makeTransform(tranformFn){
        let transformer = new stream.Transform({objectMode: true});
        transformer._transform = tranformFn;
        return transformer;
    }
    
    makePipeline(streams, onDataFn=null){
        return new Promise((resolve, reject)=>{
            let writer = streams.slice(-1)[0];
            let reader = streams[0];
            writer.on('finish',()=>{
                resolve('success');
            });
            writer.on('error',(err)=>{
                reject(`Pipeline failed. ${err}`);
            });
            reader.on('data',(data)=>{
                if(onDataFn){
                    onDataFn(data);
                }
            });
            return streams.reduce((p, s)=>p.pipe(s));
        });
    }
};

export default new Stream();