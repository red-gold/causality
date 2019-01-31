import {default as wordVecEN} from './wordVec.EN';
let causalNetWordVec = {
    language: ['EN'],
    get EN(){
        return new Promise(async (resolve, reject)=>{
            await wordVecEN.getDescription();
            resolve(wordVecEN);
        });
    }
};
export default causalNetWordVec;