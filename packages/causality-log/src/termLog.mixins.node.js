const LogNodeMixins = (LogClass)=> class extends LogClass{
    connect(channel){
        //nothing
    }
    log(message){
        if(this.level >= this.AcceptedLevels['log']){
            return null;
        }
        console.log(message);
    }
    progress(processMessage){
        //TODO: implement progress show
    }
    debug(message){
        if(this.level >= this.AcceptedLevels['debug']){
            return null;
        } 
        console.debug(message);
    }
};

export default LogNodeMixins;