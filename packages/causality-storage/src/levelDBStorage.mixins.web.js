import levelup from 'levelup';
const LevelJSMixins = (StorageClass)=> class extends StorageClass{ 
    constructor(){
        var leveljs = require('level-js');
        console.log('leveljs mixin constructor');
        super(levelup(leveljs('data')));
    }
};
export default LevelJSMixins;