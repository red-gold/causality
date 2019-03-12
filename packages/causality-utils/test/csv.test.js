import {default as CSVUtils } from '../src/csv';
/** @test {CSVUtils} */
test('create PNG file must success', async ()=>{
    let csv = CSVUtils.CoreCSV;
    /** @test {CSVUtils#instance} */
    expect(csv).toBeDefined();
});