export default class BaseLog{
    constructor(){
        this.AcceptedLevels = {debug: 0, log:1, warning:2, error: 3};
        this.rAcceptedLevels = {0:'debug', 1: 'log', 2: 'warning', 3: 'error'};
        this.level = this.AcceptedLevels['debug'];
    }
    set Level(level){
        if(this.AcceptedLevels[level]!==undefined){
            this.level = this.AcceptedLevels[level];    
        }
        else{
            throw Error(`${level} must be one of ${Object.keys(this.AcceptedLevels)}`);
        }
    }
    get Level(){
        return this.rAcceptedLevels[this.level];
    }
}