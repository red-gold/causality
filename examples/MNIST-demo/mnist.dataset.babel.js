import { CausalNet } from '../../src/index';
import { MNIST } from 'causal-net.datasets';
import { Logger } from 'causal-net.log';
import { Fetch } from 'causal-net.utils';
const _NetConfig = {
    HyperParameters: {Datasize:10},
    Pipeline:[
        {   Name: 'input', Type: 'tensor', Input: 'PipeInput', 
            Flow:[  {Op: 'reshape', Args:[['$Datasize', 28, 28, 4]] } ] 
        },
        {   Name:'conv1', Type: 'tensor', Input: 'input',
            Parameters: { filter: [3, 3, 4, 32] },
            Flow: [ { Op: 'conv2d', Parameter: 'filter', Args: [1, 'same'] } ] 
        },
        {   Name:'conv2', Type: 'tensor', Input: 'conv1',
            Parameters: { filter: [3, 3, 32, 32] },
            Flow: [ { Op: 'conv2d', Parameter: 'filter', Args: [1, 'same'] },
                    { Op: 'reshape', Args: [['$Datasize', -1]] },
                    { Op: 'tanh', Args: [] } ] 
        },
        {   Name:'dense', Type: 'tensor', Input: 'conv2',
            Parameters: { Weight: [28*28*32, 10], Bias: [10]  },
            Flow: [ { Op: 'dot', Parameter: 'Weight', Args: [] },
                    { Op: 'add', Parameter: 'Bias',  Args: [] } ] 
        },
        {   Name:'PipeOutput', Type: 'tensor', Input: 'dense',
            Flow: [ { Op: 'reshape', Args: [['$Datasize', -1]] } ] 
        } ] };

let parameters = {};
Logger.connect(document.getElementById('logger'));
var mnist = null, causalNet = null, NumChunks=1, trainSet = null, testSet = null;
const FetchConfigureDatset = async (datasetUrl='http://127.0.0.1:8080/MNIST_dataset/')=>{
    const url = datasetUrl + 'dataset.summary.json';
    const configure = await Fetch.fetchJson(url);
    configure.datasetUrl = datasetUrl;
    mnist = new MNIST(configure);
    Logger.log(mnist.summary());
    return mnist;
};

const FetchData = async ()=>{
    let chunkStorage = await mnist.fetchDataset('/mnist/',NumChunks);
    Logger.log({chunkStorage});
};
const PreprocessingData = async ()=>{
    let stream = mnist.makePreprocessingStream();
    let preprocessingStorage = await mnist.preprocessingDataset(stream);
    Logger.log({'number of preprocessing samples': preprocessingStorage.length});
};
const SplitTrainTestSet = (ratio)=>{
    let [trainSet, testSet] = mnist.getTrainTestSet();
    Logger.log({'number of train samples': trainSet.length, 
                'number of test samples': testSet.length});
    return {trainSet, testSet};
};

const InitModel = (parameters=null)=>{
    causalNet = new CausalNet(_NetConfig, parameters);
    return causalNet;
};

const TrainModel = async (trainSet)=>{
    const DoBatchTrainSampleGenerator = (batchSize)=>{return mnist.makeSampleGenerator(trainSet, batchSize);};
    let logTrain = await causalNet.train(DoBatchTrainSampleGenerator, 10, 25, 0.005);
    Logger.log(logTrain);
};
const TestModel = async (testSet)=>{
    const DoBatchTestSampleGenerator = (batchSize)=>{return mnist.makeSampleGenerator(testSet, batchSize);};
    let testResult = await causalNet.test(DoBatchTestSampleGenerator, testSet.length);
    Logger.log({testResult});
    return testResult;
    
};

const SaveModel = async (modelName='saveDemo.model')=>{
    //Logger.log(await causalNet.saveParams('saveDemo.model'));
    return await causalNet.loadParams(modelName);
};

(()=>{
    console.log('init script');
    $("#TrainingModel :input").prop("disabled", true);
    $("#TestingModel :input").prop("disabled", true);
    $("#Preprocessing").prop("disabled", true);
    FetchConfigureDatset().then(res=>{
        mnist = res;
    });
    $('#SetChunks').val(NumChunks);
    $('#SetChunks').change(function(){
        NumChunks = $('#SetChunks').val();
        console.log({NumChunks});
    });

    $('#FetchData').click(function(){
        $('#FetchData').prop("disabled", true);//do not allow refetch on the same session
        console.log('fetch touch');
        $('#FetchData').addClass('loader');
        FetchData(NumChunks).then(res=>{
            console.log(res);
            $('#FetchData').removeClass('loader');
            $("#Preprocessing").prop("disabled", false);
        }).catch(error=>{   
            console.log(error);
        });
    });

    $('#Preprocessing').click(function(){
        console.log('fetch touch');
        
        PreprocessingData().then(res=>{
            console.log(res);
            $("#TrainingModel :input").prop("disabled", false);
            $("#TestingModel :input").prop("disabled", false);
            $('#SaveModel').prop("disabled", true);//wait until train finish
            let splitSet = SplitTrainTestSet();
            trainSet = splitSet.trainSet;
            testSet = splitSet.testSet;
            //init model
            InitModel();
        }).catch(error=>{   
            console.log(error);
        });
    });

    $('#TrainModel').click(function(){
        $('#TrainModel').html('training');
        $('#TrainModel').prop("disabled", true);//wait until train finish
        TrainModel(trainSet).then(res=>{
            $('#TrainModel').prop("disabled", false);
            $('#SaveModel').prop("disabled", false);//allow to save
            console.log(res);
        }).catch(error=>{   
            console.log(error);
        });
    });

    $('#TestModel').click(function(){
        TestModel(testSet).then(res=>{
            console.log(res);
        }).catch(error=>{   
            console.log(error);
        });
    });
    
})();


