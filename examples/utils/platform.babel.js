import {platform} from 'causal-net.utils';
console.log(platform.currentPlatform());
class A{
    constructor(){
    }
    sayA(){
        console.log('say A');
    }
}
const AMixinsNode = (Base)=>class extends Base{
    sayA(){
        console.log('mixins on node');
        super.sayA();
    }
    sayAExtend(){
        console.log('say A with mixins on node');
    }
}
const AMixinsWeb = (Base)=>class extends Base{
    sayAExtend(){
        console.log('say A with mixins on web');
    }
}
class AExtends extends platform.mixWith(A, 
    {'node': [AMixinsNode], 'web': [AMixinsWeb]}){
        constructor(){
            super();
        }
    }
const a = new AExtends();
a.sayA();
a.sayAExtend();