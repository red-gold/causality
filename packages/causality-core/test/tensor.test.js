import {default as Tensor} from '../src/tensor';

test('tensor init should be okay', ()=>{
    let T = new Tensor();
    expect(T).toBeDefined();
})