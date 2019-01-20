import levelup from 'levelup';
const LevelDownMixins = (StorageClass)=> class extends StorageClass{ 
    constructor(){
        var leveldown = require('leveldown');
        super(levelup(leveldown('data')));
    }
};
export default LevelDownMixins;
