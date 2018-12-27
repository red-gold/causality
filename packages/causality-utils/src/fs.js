import level from 'level-browserify';
export default class FileSystem{
    constructor(logger = null){
        this.logger = console;
        const indexFS = level('./db');
        this.Fs = indexFS;
    }1
    get CoreFs(){
        return this.Fs;
    }
}
