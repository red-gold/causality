import {indexDBStorage} from '../src/index';
//TODO: need to improve performance
test('indexdb write file should be okay', async ()=>{
    let writePath = await indexDBStorage.writeFile('temp','12345');
    expect(writePath).toBeDefined();
})
test('indexdb read file should be okay', async ()=>{
    let writePath = await indexDBStorage.writeFile('temp','12345');
    let data = await indexDBStorage.readFile(writePath);    
    expect(data).toBe('12345');
})

test('indexdb delete file should be okay', async ()=>{
    let writePath = await indexDBStorage.writeFile('temp','12345');
    let filePath = await indexDBStorage.deleteFile(writePath);    
    return await indexDBStorage.readFile('temp').catch(e=>{
        expect(e).toMatch(/read/);
    })
})

test('indexdb batch write should be okay', async ()=>{
    let ops = [//no op get
            { type: 'put', key: 'temp', value: '123445' },
            { type: 'del', key: 'temp' }];
    let res = await indexDBStorage.batch(ops);
    console.log({res});
    expect(res).toBeDefined();
})

test('indexdb list file should be okay', async ()=>{
    let fileList = await indexDBStorage.getFileList('/');
    console.log({fileList});
    expect(fileList).toBeDefined();
})

test('indexdb delete by prefix should be okay', async ()=>{
    let writePath = await indexDBStorage.deleteFileByPrefix('/');
    console.log({writePath});
    expect(writePath).toBeDefined();
})