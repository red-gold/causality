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
 * This Platform class wrap [platform](https://www.npmjs.com/package/platform) 
 * for checking current platform either 'node' or 'web'. And advance mixins
 * @todo: extend more platform in future
 * @class Platform
 * @example
 * [EXAMPLE ../examples/platform.babel.js]
 */
class IsoPlatform{
    /**
     *Creates an instance of platform.
     * @memberof Platform
     */
    constructor(platform){
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
        return this.platform.parse();
    }
    /**
     * Enhanced mixins for based class and list of mixins
     * @param { Class } baseClass - base class
     * @param { List } mixins - list of mixins function
     * @returns { Class } 
     * @memberof Platform
     */
    mixWith(baseClass, mixins, className=null){
        var mixinsList = [];
        if(Array.isArray(mixins)){
            mixinsList = mixins;
        }
        else{
            const PfName = platformMapping(platform.parse()['name']);
            mixinsList = mixins[PfName];
        }
        if(mixinsList === undefined){
            throw Error(`${PfName} not found in mixins`);
        }
        return mixinsList.reduce((c, mixin) => {
            if(typeof mixin === "function"){
                return mixin(c);
            }
            else{
                throw Error(`${JSON.stringify(c)} is not support mixins with ${baseClass.name}`);
            }
        }, baseClass);
    }
};

let isoPlatform = new IsoPlatform(platform);
export default isoPlatform;
