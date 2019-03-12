import {default as Platform} from '../src/platform';
/** @test {Platform} */
test('platform must return', ()=>{
    let platform = Platform.currentPlatform();
    /** @test {Platform#instance} */
    expect(platform).toBeDefined();
});
test('platform mix should works', ()=>{
    class A{
        constructor(){
        }
        sayA(){
            return 'say A';
        }
    }
    const AMixins = (Base)=>class extends Base{
        sayAExtend(){
            return 'say A with mixins';
        }
    }
    class AExtends extends Platform.mixWith(A, [AMixins]){}
    const a = new AExtends();
    /** @test {Platform#mixWith} */
    expect(a.sayAExtend()).toEqual('say A with mixins');
});