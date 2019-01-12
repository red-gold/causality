import {default as Stream} from '../src/stream';
test('Stream readable must define', async ()=>{
    let reader = Stream.makeReadable();
    expect(reader).toBeDefined();
})