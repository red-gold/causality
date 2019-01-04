import levelup from 'levelup';
import leveldown from 'leveldown';
const LevelDownMixins = (StorageClass)=> class extends StorageClass{ 
    constructor(){
        super(levelup(leveldown('data')));
    }
};
export default LevelDownMixins;
