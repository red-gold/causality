import * as cliProgress from 'cli-progress';

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
    progressBegin(range){
        this.processCounter += 1;
        this.currentBar = new cliProgress.Bar({}, cliProgress.Presets.shades_classic);
        this.currentBar.setTotal(range);
    }
    progressUpdate(progressMessage){
        if(!this.currentBar){
            this.progressBegin();
        }
        this.processCounter += 1;
        this.currentBar.update(this.processCounter);
    }
    progressEnd(){
        this.currentBar.stop();
        this.processCounter = 0;
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