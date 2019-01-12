import {default as Platform} from '../src/platform';
test('platform must return', async ()=>{
    let platform = Platform.currentPlatform();
    console.log({platform});
    expect(platform).toBeDefined();
})