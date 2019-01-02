import level from 'level-browserify';
export default class FileSystem{
    constructor(logger = null){
        this.logger = console;
        this.Storage = level('./db');
    }
    get CoreStorage(){
        return this.Storage;
    }
}
