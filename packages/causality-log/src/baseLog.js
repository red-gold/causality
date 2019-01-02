export default class BaseLog{
    constructor(preset=[]){
        this.preset;
    }
    get from(preset){
        const NewPreset = [...this.preset, ...preset];
        return new BaseLog([preset]);
    }
}