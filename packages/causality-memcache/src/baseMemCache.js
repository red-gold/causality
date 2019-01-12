export default class BaseMemCache{
    constructor(zone=''){
        this.zone = zone;
    }

    async getItem(key, asBuffer=false){
        throw Error('need to implement');
    }

    async setItem(key, data){
        throw Error('need to implement');
    }
}