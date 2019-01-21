const LogNodeMixins = (LogClass)=> class extends LogClass{
    connect(channel){
        //nothing
    }
    log(message){
        console.log(message);
    }
    scrollBottom(){
        //nothing
    }
    progress(processMessage){
    }
};

export default LogNodeMixins;