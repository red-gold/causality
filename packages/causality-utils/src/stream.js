import st from 'readable-stream';
export default class Stream{
    constructor(logger=null){
        this.ST = st;
    }
    get coreStream(){
        return this.ST;
    }
    static makeReadable(readFn=()=>{}){
        let reader = st.Readable({objectMode: true});
        reader._read = readFn;
        return reader;
    }
    static wrapReadable(readableObj){
        let reader = st.Readable();
        reader.wrap(readableObj);
        return reader;
    }
    static makeWritable(writeFn){
        let writer = st.Writable();
        writer._write = writeFn;
        return writer;
    }
    static makeTransform(tranformFn){
        let transformer = st.Transform({objectMode: true});
        transformer._transform = tranformFn;
        return transformer;
    }
}