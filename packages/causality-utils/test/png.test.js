import {default as PNGUtils } from '../src/png';
/** @test {PNGUtils} */
test('create PNG file must success', async ()=>{
    let PNG = PNGUtils.CorePNG;
    let png = new PNG({width:1, height:1});
    png.data = Buffer.from([128,128,128,255]);
    /** @test {PNGUtils#createFile} */
    expect(png).toBeDefined();
});