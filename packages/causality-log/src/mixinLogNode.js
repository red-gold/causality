const LogNodeMixins = (LogClass)=> class extends LogClass{
    connect(){

    }
    log(message){
        message = this.prefixWraper(message);
        console.log(message);
    }
    trace(message){
        message = this.prefixWraper(message);
        console.trace(message);
    }
}

export default LogNodeMixins;