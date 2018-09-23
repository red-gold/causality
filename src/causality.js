const isNode = require !== undefined;
if(isNode){
    var R = require('ramda');
    var tf = require('@tensorflow/tfjs');
}
function Causality(configure={}){
    let params = {w: tf.variable(tf.randomNormal([3,3])), 
                  b: tf.variable(tf.randomNormal([3,3]))}
    
    const make_predict = (data=tf.buffer([3,3]))=>{
        const {w,b} = params;
        const predict = tf.tidy(()=>{
                    return w.dot(data).add(b);
                });
        return {predict};
    }

    const loss = (data)=>{
        let {predict} = make_predict(data);
        let loss = predict.sub(data).pow(tf.scalar(2)).mean();
        return loss; 
    };
    const train = (data, n_iters=10, lr=0.2)=>{
        const optimizer = tf.train.sgd(lr);
        for(let iter of R.range(0,n_iters)){
            optimizer.minimize(()=>{
                let l = loss(data);
                l.print();
                return l;
            });
        }
        return 
    };
    const get_params = ()=>{
        return params;
    }
    return {loss, train, make_predict};
}

if(typeof require !== 'undefined' && require.main === module){
    let data = tf.tensor([0,1,0,
                          1,1,1,
                          0,1,0], shape=[3,3]);
    const {loss, train, make_predict} = Causality();
    const {predict} = make_predict(data);
    predict.print();
    loss(data);
    train(data);
}