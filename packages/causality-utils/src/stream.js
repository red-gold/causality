import stream from 'readable-stream';
export default class Stream{
    constructor(){
        this.stream = stream;
    }
    get coreStream(){
        return this.stream;
    }
    static makeReadable(readFn=()=>{}){
        let reader = stream.Readable({objectMode: true});
        reader._read = readFn;
        return reader;
    }
    static wrapReadable(readableObj){
        let reader = stream.Readable();
        reader.wrap(readableObj);
        return reader;
    }
    static makeWritable(writeFn){
        let writer = stream.Writable();
        writer._write = writeFn;
        return writer;
    }
    static makeTransform(tranformFn){
        let transformer = stream.Transform({objectMode: true});
        transformer._transform = tranformFn;
        return transformer;
    }
}