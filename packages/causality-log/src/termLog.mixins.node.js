const LogNodeMixins = (LogClass)=> class extends LogClass{
    connect(channel){
        //nothing
    }
    log(message){
        console.log(message);
    }
};

export default LogNodeMixins;