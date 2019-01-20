import {indexDBStorage} from '../src/index';
//TODO: need to improve performance
test('indexdb write file should be okay', async ()=>{
    let writePath = await indexDBStorage.writeFile('temp','12345');
    expect(writePath).toBeDefined();
})