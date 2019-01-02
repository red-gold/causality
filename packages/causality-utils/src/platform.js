import platform from 'platform';
import process from 'process';

const PlatformMapping = (name)=>{
    if(name === 'Node.js'){
        return 'node';
    }
    else{
        return 'web';
    }
};

export default class Platform{
    constructor(){
        this.platform = platform;
    }
    static PID(){
        if(typeof process !== 'undefined' && process.pid) {
            return process.pid;
        }
        else{
            return null;
        }
    }

    static currentPlatform(){
        return platform.parse();
    }

    static mixWith(BaseClass, mixins){
        var mixinsList = [];
        if(Array.isArray(mixins)){
            mixinsList = mixins;
        }
        else{
            const PfName = PlatformMapping(platform.parse()['name']);
            mixinsList = mixins[PfName];
        }
        if(mixinsList === undefined){
            throw Error(`${PfName} not found in mixins`);
        }
        return mixinsList.reduce((c, mixin) => mixin(c), BaseClass);
    }
}
