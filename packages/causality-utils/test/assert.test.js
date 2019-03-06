import {default as Assert} from '../src/assert';
/** @test {Assert} */
test('assert should be define', async ()=>{
    /** @test {Assert#instance} */
    expect(Assert).toBeDefined();
})