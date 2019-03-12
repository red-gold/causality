import {default as Fetch} from '../src/fetch';
/** @test {Fetch} */
test('fetch file should be okay', async ()=>{
    const link = 'https://avatars3.githubusercontent.com/u/43268620?s=200&v=4';
    let data = await Fetch.fetchData(link);
    /** @test {Fetch#instance} */
    expect(data).toBeDefined();
})
