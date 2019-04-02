test('deployment shoul be defined', ()=>{
    const Init = ()=>{ 
        try{ let MNIST = new MnistDataset(); }
        catch(e){
            throw Error(e);
        } 
    };
    expect(Init()).toThrowError();
});