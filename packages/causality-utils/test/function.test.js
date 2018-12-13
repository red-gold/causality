var {F} = require('../dist/causal-net-utils');
test('get ramda should okay', ()=>{
    const getR = ()=>{
        var f = new F();
        return f;
    }
    expect(getR()).toBeDefined();
})