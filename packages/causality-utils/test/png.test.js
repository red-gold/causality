import {default as PNG} from '../src/png';
test('create PNG file must success', async ()=>{
    let png = new PNG({width:1, height:1});
    png.data = Buffer.from([128,128,128,255]);
    expect(png).toBeDefined();
})