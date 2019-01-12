import {default as Fetch} from '../src/fetch';
test('fetch file should be okay', async ()=>{
    const link = 'https://avatars3.githubusercontent.com/u/43268620?s=200&v=4';
    let data = await Fetch.fetchData(link);
    expect(data).toBeDefined();
})
