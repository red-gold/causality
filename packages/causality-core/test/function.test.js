import {default as Function} from '../src/function';
/** @test { Function } */
test('function setIn should be okay', ()=>{
    let F = new Function();
    let setVal = F.setIn(['a','b','c'],'3',{a:1});
    console.log(JSON.stringify(setVal));
    expect(JSON.stringify(setVal)).toEqual(JSON.stringify({"a":{"b":{"c":"3"}}}));
})