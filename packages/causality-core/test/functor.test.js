import {default as Functor} from '../src/functor';
/** @test { Functor } */
test('functor setIn should be okay', ()=>{
    let F = new Functor();
    let setVal = F.setIn(['a','b','c'],'3',{a:1});
    console.log(JSON.stringify(setVal));
    expect(JSON.stringify(setVal)).toEqual(JSON.stringify({"a":{"b":{"c":"3"}}}));
})