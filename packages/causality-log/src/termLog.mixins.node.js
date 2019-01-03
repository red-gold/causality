const LogNodeMixins = (LogClass)=> class extends LogClass{
    connect(channel){
        //nothing
    }
    log(message){
        console.log(this.prefix.join('/'));
        console.log(message);
    }
    trace(message){
        console.log(this.prefix.join('/'));
        console.trace(message);
    }
};

export default LogNodeMixins;