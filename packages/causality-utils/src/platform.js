import platform from 'platform';
import process from 'process';
export default class Platform{
    constructor(){
        this.platform = platform;
    }
    getConfig(platformConfigure){
        throw Error('platform not found in configure');
    }
    get PID(){
        if(process && process.pid) {
            return process.pid;
        }
        else{
            return null;
        }
    }
}