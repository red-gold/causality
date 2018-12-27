import PlatformConfig from './platformConfig/log.config.json';
export default class Logger{
    constructor(prefix=[], config=null){
        this.config = config?config:PlatformConfig; 
        
        this.logChanel = {};
        this.prefix = prefix;
    }
    
    get Prefix(){
        return this.prefix;
    }
    
    static from(log, prefix){
        const prevPrefix = log.Prefix;
        return new Log([...prevPrefix, prefix]);
    }

    log(msg){
        console.log(prefix.join('>'));
        console.log(msg);
    }
}