var {IO} = require('../dist/causal-net-utils');

test('import IO should pass', ()=>{
    const io = ()=>{
        let io = new IO();
        console.log(io);
        return null;
    }
    expect(io()).toBeNull();
})
