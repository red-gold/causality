import {default as Platform} from '../src/platform';
test('platform must return', async ()=>{
    let platform = Platform.currentPlatform();
    
    expect(platform).toBeDefined();
})