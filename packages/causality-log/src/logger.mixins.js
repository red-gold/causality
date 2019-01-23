const LoggerMixins = (BasedClass)=> class extends BasedClass{
    constructor(...args){
        super(...args);
        this.logger = console;
    }
    progress(progressMessage){
        if(this.logger.progress){
            this.logger.progress(progressMessage);
        }
    }
    set Logger(logger){
        this.logger = logger;
    }
    
    get Logger(){
        return this.logger;
    }
};

export default LoggerMixins;