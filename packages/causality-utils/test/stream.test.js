import { default as Stream } from '../src/isoStream';
/** @test {Stream} */
test('Stream readable must define', async ()=>{
    let reader = Stream.makeReadable();
    /** @test {Stream#instance} */
    expect(reader).toBeDefined();
})