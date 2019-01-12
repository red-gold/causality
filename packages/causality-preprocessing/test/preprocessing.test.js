import {default as Preprocessing} from '../src/preprocessing';

test('preprocessing instance should be define', ()=>{
    let preprocessing = Preprocessing;
    expect(preprocessing).toBeDefined();
})