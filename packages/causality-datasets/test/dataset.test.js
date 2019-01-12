import {default as MnistDataset} from '../src/MNIST.ImgDataset';
test('dataset no configure instance should be not okay', ()=>{
    const Init = ()=>{ 
        try{ let MNIST = new MnistDataset(); }
        catch(e){
            throw Error(e);
        } 
    };
    expect(Init()).toThrowError();
});