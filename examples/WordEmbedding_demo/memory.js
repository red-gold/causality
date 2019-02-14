import { Tensor } from 'causal-net.core';
class SimpleMemory extends Tensor{
    constructor(){ 
        super();
    }
    updateSlot(slots, slotFreq){
        for(let slot of slots){

        }
    }
    similarScore(){
        let ts1 = tf.tensor(vec1, shape=[1, vecSize]);
        let ts2 = tf.tensor(vec2, shape=[1, vecSize]);
        let similarityScore = ts1.dot(ts2.transpose())
            .div(tf.pow(tf.mul(
                    ts1.dot(ts1.transpose()), ts2.dot(ts2.transpose())), 0.5) );
        return similarityScore;
    }
    norm(){

    }
    normalize(vecs){
        let ts = tf.tensor(vecs);
        ts$mean = ts.mean(axis=1, keepDims=true);
        console.log( ts$mean.shape );
        ts$std = tf.pow(tf.mean( tf.pow(tf.abs( ts.sub(ts$mean)) ,2 ), axis=1, keepDims=true), 0.5);
        return ts.sub(ts$mean).div(ts$std);
    }
    topKSimilar(){

    }
    mostPopular(){

    }
    sampling(size){

    }
}

let simpleMemory = new SimpleMemory();
simpleMemory