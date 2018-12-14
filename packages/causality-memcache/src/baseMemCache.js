export default class BaseMemCache{
    constructor(zone=''){
        this.zone = zone;
    }

    flush(){
        throw Error('need to implement');
    }

    getItem(key){
        throw Error('need to implement');
    }

    setItem(key, value){
        throw Error('need to implement');
    }
}