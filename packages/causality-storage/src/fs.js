import level from 'level-browserify';
export default class FileSystem{
    constructor(logger = null){
        this.logger = console;
        this.Fs = level('./db');
    }
    get CoreFs(){
        return this.Fs;
    }
}
