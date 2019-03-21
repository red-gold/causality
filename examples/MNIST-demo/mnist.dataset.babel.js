import { CausalNet, Storage, Datasets, Log, Utils } from '../../src/index';
const { MNIST }  = Datasets;
const { Logger } = Log;
const { Fetch }  = Utils;
const _NetConfig = {
    HyperParameters: {SampleSize:100},
    Pipeline:[
        {   Name: 'input', Type: 'Tensor', Input: 'PipeInput', 
            Flow:[  {Op: 'reshape', Args:[['$SampleSize', 28, 28, 4]] } ] 
        },
        {   Name:'conv1', Type: 'Tensor', Input: 'input',
            Parameters: { filter: [3, 3, 4, 32] },
            Flow: [ { Op: 'conv2d', Parameter: 'filter', Args: [1, 'same'] } ] 
        },
        {   Name:'conv2', Type: 'Tensor', Input: 'conv1',
            Parameters: { filter: [3, 3, 32, 32] },
            Flow: [ { Op: 'conv2d', Parameter: 'filter', Args: [1, 'same'] },
                    { Op: 'reshape', Args: [['$SampleSize', -1]] },
                    { Op: 'tanh', Args: [] } ] 
        },
        {   Name:'dense', Type: 'Tensor', Input: 'conv2',
            Parameters: { Weight: [28*28*32, 10], Bias: [10]  },
            Flow: [ { Op: 'dot', Parameter: 'Weight', Args: [] },
                    { Op: 'add', Parameter: 'Bias',  Args: [] } ] 
        },
        {   Name:'PipeOutput', Type: 'Tensor', Input: 'dense',
            Flow: [ { Op: 'reshape', Args: [['$SampleSize', -1]] } ] 
        } ] };

let parameters = {};
Logger.connect(document.getElementById('logger'));
var mnist = null, causalNet = null, NumChunks=1, trainSet = null, testSet = null;
const FetchConfigureDatset = async (datasetUrl)=>{
    const url = datasetUrl + 'dataset.summary.json';
    const configure = await Fetch.fetchJson(url);
    configure.datasetUrl = datasetUrl;
    return configure;
};

const FetchData = async ()=>{
    let chunkStorage = await mnist.fetchDataset('/mnist/',NumChunks);
    Logger.log({chunkStorage});
    return chunkStorage;
};
const PreprocessingData = async ()=>{
    let preprocessingStorage = await mnist.preprocessingDataset();
    Logger.log({'number of preprocessing samples': preprocessingStorage.length});
};
const SplitTrainTestSet = (ratio)=>{
    let [trainSet, testSet] = mnist.getTrainTestSet();
    Logger.log({'number of train samples': trainSet.length, 
                'number of test samples': testSet.length});
    return {trainSet, testSet};
};

var ensemble = {models:[]};

const InitModel = (parameters=null)=>{
    causalNet = new CausalNet(_NetConfig, parameters);
    return causalNet;
};

const LoadSavedModels = async ()=>{
    let savedModels = await causalNet.getSavedParams();
    Logger.log({'saved models':savedModels});
    $('#saveModelList').empty();
    for(let model of savedModels){
        $('#saveModelList').append(`<li modelName="${model}"><p>${model}</p></li>`);
    };
    $('#saveModelList li').click(function(){
        let modelName = $(this).attr('modelName');
        let idx = ensemble.models.indexOf(modelName);
        if(idx===-1){
            ensemble.models.push(modelName);
            $(this).addClass('selected');
        }
        else{
            ensemble.models.splice(idx,1);
            $(this).removeClass('selected');
        }
        console.log({modelName, idx, ensemble});
    });
};

const TrainModel = async (trainSet, batchSize=10)=>{
    causalNet.logger = Logger;    
    const DoBatchTrainSampleGenerator = (epochIdx)=>{return mnist.makeSampleGenerator(trainSet, batchSize);};
    let logTrain = await causalNet.train(DoBatchTrainSampleGenerator, batchSize);
    Logger.log(logTrain);
};
const TestModel = async (testSet)=>{
    let batchSize = testSet.length;
    const DoBatchTestSampleGenerator = (batchSize)=>{return mnist.makeSampleGenerator(testSet, batchSize);};
    let testResult = await causalNet.test(DoBatchTestSampleGenerator);
    Logger.log({testResult});
    return testResult;
    
};

const TestEnsembleModel = async (testSet, models)=>{
    const DoBatchTestSampleGenerator = (batchSize)=>{return mnist.makeSampleGenerator(testSet, batchSize);};
    let testResult = await causalNet.ensembleTest(DoBatchTestSampleGenerator, models);
    Logger.log({testResult});
    return testResult;
    
};

/* function to save JSON to file from browser
* adapted from http://bgrins.github.io/devtools-snippets/#console-save
* @param {Object} data -- json object to save
* @param {String} file -- file name to save to 
*/
function saveJSON(data, filename){

    if(!data) {
        console.error('No data');
        return;
    }

    if(!filename) filename = 'console.json';

    if(typeof data === "object"){
        data = JSON.stringify(data, undefined, 4);
    }

    var blob = new Blob([data], {type: 'text/json'}),
        e    = document.createEvent('MouseEvents'),
        a    = document.createElement('a');

    a.download = filename;
    a.href = window.URL.createObjectURL(blob);
    a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':');
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    a.dispatchEvent(e);
}

const SaveModel = async (modelName=null)=>{
    let date = new Date().toISOString();
    modelName = modelName || `save-${date}.model`;
    console.log({modelName});
    let params = await causalNet.saveParams(modelName);
    return {modelName, params};
};

(()=>{
    console.log('init script');
    $('#SetChunks').val(NumChunks);
    $('#FetchData').prop("disabled", true);
    $("#TrainingModel :input").prop("disabled", true);
    $("#TestingModel :input").prop("disabled", true);
    $("#Preprocessing").prop("disabled", true);
    var {datasetUrl} = JSON.parse(document.getElementById('deploy').textContent);
    console.log({datasetUrl});
    FetchConfigureDatset(datasetUrl).then(configure=>{
        mnist = new MNIST(configure);
        Logger.log(mnist.summary());
        $('#FetchData').prop("disabled", false);
    });
    
    $('#SetChunks').change(function(){
        NumChunks = $('#SetChunks').val();
        console.log({NumChunks});
    });

    $('#FetchData').click(function(){
        $('#FetchData').prop("disabled", true);//do not allow refetch on the same session
        try{
            FetchData(NumChunks).then(res=>{
                $("#Preprocessing").prop("disabled", false);
            });
        }
        catch(error){   
            console.log(error);
        };
    });

    $('#Preprocessing').click(function(){
        $("#Preprocessing").prop("disabled", true);
        PreprocessingData().then(res=>{
            //init model
            InitModel();
            LoadSavedModels().then(res=>{
                $("#Preprocessing").prop("disabled", false);
                $("#TrainingModel :input").prop("disabled", false);
                $("#TestingModel :input").prop("disabled", false);
                $('#SaveModel').prop("disabled", true);//wait until train finish
                let splitSet = SplitTrainTestSet();
                trainSet = splitSet.trainSet;
                testSet = splitSet.testSet;
            });
            
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
    
    $('#SaveModel').click(function(){
        SaveModel().then(({modelName, params})=>{
            saveJSON(params, modelName);
            LoadSavedModels();
        });
    });

    $('#TestModel').click(function(){
        TestModel(testSet).then(res=>{
            console.log(res);
        }).catch(error=>{   
            console.error(error);
        });
    });

    $('#DeleteStorage').click(function(){
        Storage.indexDBStorage.deleteFileByPrefix('').then(res=>{
            console.log({res});
        });
    });

    $('#TestEnsemble').click(function(){
        if(ensemble.models.length==0){
            Logger.log('atleast one pretrained model is required');
            return;
        }
        TestEnsembleModel(testSet, ensemble.models).then(res=>{
            console.log(res);
        }).catch(error=>{   
            console.error(error);
        });
    });
})();


