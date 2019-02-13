import * as cliProgress from 'cli-progress';
function resetProgress(target, key, returnFn){
    returnFn.currentBar = false;
    return returnFn;
}
const LogNodeMixins = (LogClass)=> class extends LogClass{
    connect(channel){
        this.currentBar = false;
    }
    log(message){
        //TODO: make decorator 
        this.currentBar = false;
        if(this.level >= this.AcceptedLevels['log']){
            return null;
        }
        console.log(message);
    }
    progress(progressMessage){
        if(!this.currentBar){
            this.currentBar = new cliProgress.Bar({}, cliProgress.Presets.shades_classic);
            let totalVal = (progressMessage.total)?progressMessage.total:100;
            this.currentBar.start(totalVal, 0, progressMessage);
        }
        else{
            let totalVal = (progressMessage.total)?progressMessage.total:100;
            let currentVal = (progressMessage.current)?progressMessage.current:1;
            this.currentBar.setTotal(totalVal);
            this.currentBar.update(currentVal);
        }
    }
    debug(message){
        this.currentBar = false; 
        if(this.level >= this.AcceptedLevels['debug']){
            return null;
        }
        console.debug(message);
    }
};

export default LogNodeMixins;