import levelup from 'levelup';

const LevelJSMixins = (StorageClass)=> class extends StorageClass{ 
    constructor(){
        var leveljs = require('level-js');
        super(levelup(leveljs('data')));
    }
};
export default LevelJSMixins;