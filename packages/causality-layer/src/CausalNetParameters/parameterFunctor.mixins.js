const ParameterFunctorMixins = (FunctorClass)=> class extends FunctorClass{ 
    isParameter(val){
        const R = this.R;
        return R.is(Array)(val) && R.all(R.is(Number), val);
    }        
};

export default ParameterFunctorMixins;