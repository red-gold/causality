import {IndexDBStorage} from '../dist/@causalNet/storage.node';
//TODO: need to improve performance
test('indexdb write file should be okay', async ()=>{
    let writePath = await IndexDBStorage.writeFile('temp','12345');
    expect(writePath).toBeDefined();
})