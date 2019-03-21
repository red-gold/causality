import {default as csvUtils } from '../src/csvUtils';
/** @test {csvUtils} */
test('create PNG file must success', async ()=>{
    let csv = csvUtils.CoreCSV;
    /** @test {csvUtils#instance} */
    expect(csv).toBeDefined();
});