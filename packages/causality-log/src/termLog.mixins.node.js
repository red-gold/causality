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
        let node = this.getElementsByTagName("li:nth-last-of-type(1)");
        console.log(node);
        if(!node){//create new
        }
    }
};

export default LogNodeMixins;