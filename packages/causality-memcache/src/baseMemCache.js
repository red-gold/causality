export default class BaseMemCache{
    constructor(zone=''){
        this.zone = zone;
    }

    flush(){
        throw Error('need to implement');
    }

    getItem(zone, key){
        throw Error('need to implement');
    }

    setItem(zone, key, value){
        throw Error('need to implement');
    }
}