import ReactDOM from "react-dom";
import React  from "react";
import { default as Logger } from './components/logger';
import { default as Model } from './components/model';
import { default as Parameters } from './components/parameters';
import { default as CanvasInput } from './components/canvasInput';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { causalNet } from 'causal-net'; 
import { termLogger } from 'causal-net.log'; 
import { indexDBStorage } from 'causal-net.storage'; 
import TextField from '@material-ui/core/TextField';
import { PipeLineConfigure, Connector } from './pipeline/mnist.pipeline';
const styles = theme => ({
  logger:{
    height: 600,
    'overflow-y': 'scroll',
    'overflow-x': 'hidden'
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    [theme.breakpoints.up(1200 + theme.spacing.unit)]: {
      width: 1200,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  }
  
});
class MNIST extends React.Component {
    state = {
      onWaiting: false,
      dataPreprocessed: false,
      saveModels: [],
      dataChunks: 0,
    }
    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);  
        this.dataEmit = this.dataEmit.bind(this);
        this.fetchChunks = this.fetchChunks.bind(this);
        this.train = this.train.bind(this);
        this.test = this.test.bind(this);
        this.ensembleTrain = this.ensembleTrain.bind(this);
        this.getSaveList = this.getSaveList.bind(this);
        this.setEnsembleModels = this.setEnsembleModels.bind(this);
        this.resetStorage = this.resetStorage.bind(this);
        this.modelListener = this.modelListener.bind(this);
    }
    componentDidMount() {
        this.setState({onWaiting: true});
        const init = async()=>{
            termLogger.connect('#logger');
            const sourceLink = 'http://0.0.0.0:5000/MNIST_dataset/';
            let {dataChunks, promiseEmitter} = 
              await Connector({ sourceLink, listener: this.modelListener });
            causalNet.setByConfig(PipeLineConfigure);
            this.promiseEmitter = promiseEmitter;
            causalNet.deploy();            
            this.setState({ dataChunks: dataChunks.length, 
                            onWaiting: false});
            
        };
        init().then(()=>this.getSaveList());
    }

    resetStorage(){
      console.log('reset storage');
      this.setState({onWaiting: true});
      indexDBStorage.deleteFileByPrefix('/').then((deletedFiles)=>{
        console.log({deletedFiles});
        this.setState({onWaiting: true});
      });
    }

    getSaveList(){
      this.setState({onWaiting: true});
      causalNet.getSavedParamList().then(saveList=>{  
        saveList = saveList.map(model=>({name: model, selected: false}));    
        this.setState({saveModels: saveList, onWaiting: false});
      });
    }

    fetchChunks(numChunks){
      this.setState({onWaiting: true});
      causalNet.read(numChunks).then((fetchResult)=>{
        this.setState({onWaiting: false, dataPreprocessed: true});
        termLogger.log({'fetch result': fetchResult});
      });
    }
    train(trainRatio, numEpochs=10, batchSize=50){
      this.setState({onWaiting: true});
      let [train, test] = causalNet.splitDataset(trainRatio);
      termLogger.log({train: train.length, test: test.length});
      causalNet.train(numEpochs, batchSize).then((trainResult)=>{
          termLogger.plot({
              type:'line', data: trainResult, 
              xLabel: 'epoch', yLabel: 'loss'});
          this.setState({onWaiting: false});
      });
    }
    ensembleTrain(trainRatio, numEpochs=10, batchSize=50){
      this.setState({onWaiting: true});
      let [train, test] = causalNet.splitDataset(trainRatio);
      termLogger.log({train: train.length, test: test.length});
      this.c = this.c?this.c+1:0;
      causalNet.ensembleTrain(numEpochs, batchSize, 'model_'+this.c).then((trainResult)=>{
        termLogger.plot({ type:'line', data: trainResult, 
                          xLabel: 'epoch', yLabel: 'loss' });
        this.setState({onWaiting: false});
      });
    }
    test(batchSize=10){
      this.setState({onWaiting: true});
      causalNet.test(batchSize).then(testResult=>{
        termLogger.log(testResult);
        this.setState({onWaiting: true});
      });
    }
    
    setEnsembleModels(modelList, modelIdx, state){
      modelList[modelIdx].selected = state;
      let selectModels = modelList
            .filter(({selected})=>selected)
            .map(({name})=>name);
      causalNet.EnsembleModels = selectModels;
      this.setState({saveModels: modelList});
    }

    dataEmit(image){
        termLogger.plot({type: 'png', data: image, width: 150, height: 150});
        this.promiseEmitter.resolve(image);
    }

    modelListener(infer){
      const { Predict } = infer;
      if(Predict){
        termLogger.log({Predict: Predict[0]});
        this.setState({Predict: Predict[0]});
      }
    }

    render() {
        const { classes } = this.props;
        const { dataPreprocessed, onWaiting, dataChunks, saveModels } = this.state;
        let handlers = { fetchChunkHandler: this.fetchChunks, 
                         splitDataHandler: this.splitData, 
                         trainHandler: this.train, 
                         ensembleTrainHandler: this.ensembleTrain,
                         setEnsembleModels: this.setEnsembleModels,
                         resetStorageHandler: this.resetStorage,
                         testHandler: this.test };
        return (
          <div>
            <Grid container spacing={16} justify="center" className={classes.layout}>
              <Grid item sm={12} className={classes.card}>
                <p>
                  This is ensemble demo for training digit recognition model with MNIST image dataset.
                </p>
              </Grid>
              <Grid item sm={6} className={classes.card}>
                <Model BaseLink={this.BaseLink}
                  pipelineState={{onWaiting, dataPreprocessed}}
                  dataChunks={dataChunks} 
                  saveModels={saveModels}
                  handlers={handlers} />
                <Parameters/>
                <textarea dataEmit={this.dataEmit}/>
              </Grid>
              <Grid item sm={6} className={classes.card}>
                <Logger className={classes.logger}/>
              </Grid>
            </Grid>            
          </div>
        );
    }
}

const MNISTDemo = withStyles(styles)(MNIST);
ReactDOM.render(<MNISTDemo/>, document.getElementById("content"));
