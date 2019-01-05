const { MNIST } = require('causal-net.datasets');
const { TermLog } = require('causal-net.log');
(async ()=>{
    const logger = new TermLog();
    let mnist = new MNIST();
    logger.log(mnist.summary());
    await mnist.fetchDataset();
    let dataset = await mnist.loadDataset();
    let [dataBuffer, labelBuffer] = dataset;
    logger.log({dataLen: dataBuffer.length, labelLen: labelBuffer.length});
})();

// const [trainIdxSet, testIdxSet] = mnist.getTrainTestSet(99);
// console.log({lenTrain: trainIdxSet.length, lenTest: testIdxSet.length});
// const batchSampleGenerator = mnist.getSampleGenerator(trainIdxSet, 10);
// for(let batch of batchSampleGenerator){
//     console.log({datalen: batch[0].length, labellen: batch[1].length});
// }