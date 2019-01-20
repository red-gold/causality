import {Preprocessing} from '../src/index';
import {Function as BaseFunction} from 'causal-net.core';

test('preprocessing instance should be define', ()=>{
    console.log({BaseFunction});
    let preprocessing = new Preprocessing();
    expect(preprocessing).toBeDefined();
})