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
/**
 * This platform class provide ultility methods for checking current platform (node, web) 
 * and enhanced mixins
 * @class Platform
 */
class Platform{
    /**
     *Creates an instance of Platform.
     * @memberof Platform
     */
    constructor(){
        this.platform = platform;
        if(typeof process !== 'undefined' && process.pid) {
            this.pid = process.pid;
        }
        else{
            this.pid = null;
        }
    }
    /**
     * return current process pid on node or `null` on web
     * @readonly
     * @memberof Platform
     */
    get PID(){
        return this.pid;
    }

    currentPlatform(){
        return platform.parse();
    }
    /**
     * Enhanced mixins for based class and list of mixins
     *
     * @param { Class } BaseClass - base class
     * @param { List } mixins - list of mixins function
     * @returns { Class } 
     * @memberof Platform
     
     */
    mixWith(BaseClass, mixins){
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
};

export default new Platform();
