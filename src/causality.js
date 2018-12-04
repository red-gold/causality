var isNode = require('is-node');

if(isNode){
    var R = require('ramda');
    var fs = require('fs-extra');
    var tf = require('@tensorflow/tfjs');
    require('@tensorflow/tfjs-node');
}
class Causality{
    constructor(configure={}){
        this.params = {w: tf.variable(tf.randomNormal([3,3])), 
                       b: tf.variable(tf.randomNormal([3,3]))}
    }

    make_predict(data){
        const {w,b} = this.params;
        const predict = tf.tidy(()=>{
                return w.dot(data).add(b);
            });
        return { predict };
    }

    loss(data){
        let {predict} = this.make_predict(data);
        let _loss = predict.sub(data).pow(tf.scalar(2)).mean();
        return _loss; 
    };

    train(data, n_iters=10, lr=0.2){
        const optimizer = tf.train.sgd(lr);
        for(let iter of R.range(0,n_iters)){
            optimizer.minimize(()=>{
                let l = this.loss(data);
                l.print();
                return l;
            });
        }
        return 
    };
    async get_params(){
        const w = await Promise
                    .all(R.map((v)=>v.data())
                        (R.values(this.params)));
        return R.fromPairs(R.__)
                    (R.addIndex(R.map)
                        ((k,i)=>[k, w[i]])(R.keys(this.params)));
    }
    async save_params(fileName){
        const w = await this.get_params();
        console.log(w);
        return fs.writeJSON(fileName, w);
    }
}

if(typeof require !== 'undefined' && require.main === module){
    let data = tf.tensor([0, 1, 0,
                          1, 1, 1,
                          0, 1, 0], shape=[3,3]);
    let causality = new Causality();
    let {predict} = causality.make_predict(data);
    predict.print();
    causality.train(data);
    
    causality.get_params()
        .then((w)=>{
            console.log(w);
        })
        .catch(()=>{
            console.log('save fail');
        });
}