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
import { PipeLineConfigure, Connector } from './pipeline/mnist.pipeline';
import { default as Config } from './config'; 
const styles = theme => ({
  logger:{
    height: 600,
    'overflow-y': 'scroll',
    'overflow-x': 'hidden',
    'background': '#9a9a9a'
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
  },
  'freeze':{
    '& *':{
      'pointer-events': 'none',
      'opacity': 0.5
    }
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
        const init = async ()=>{
            console.log(document.getElementById('logger'));
            termLogger.connect('#logger');
            const sourceLink = Config.MNISTServer;
            let {dataChunks, promiseEmitter} = 
              await Connector({ sourceLink, listener: this.modelListener });
            causalNet.setByConfig(PipeLineConfigure);
            this.promiseEmitter = promiseEmitter;
            causalNet.deploy();            
            this.setState({ dataChunks: dataChunks.length, onWaiting: false});
            
        };
        init().then(()=>this.getSaveList());
    }

    resetStorage(){
      console.log('reset storage');
      this.setState({onWaiting: true});
      indexDBStorage.deleteFileByPrefix('/').then((deletedFiles)=>{
        termLogger.log({deletedFiles});
        this.getSaveList();
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
      console.log({trainRatio});
      let [train, test] = causalNet.splitDataset(trainRatio);
      termLogger.log({train: train.length, test: test.length});
      causalNet.train(numEpochs, batchSize).then((trainResult)=>{
          termLogger.plot({
              type:'line', data: trainResult, 
              xLabel: 'epoch', yLabel: 'loss'});
          this.setState({onWaiting: false});
      });
    }
    ensembleTrain(model_name, trainRatio, numEpochs=10, batchSize=50){
      this.setState({onWaiting: true});
      let [train, test] = causalNet.splitDataset(trainRatio);
      termLogger.log({train: train.length, test: test.length});

      causalNet.ensembleTrain(numEpochs, batchSize, 'model_'+model_name).then((trainResult)=>{
        this.getSaveList();
        termLogger.plot({ type:'line', data: trainResult, 
                          xLabel: 'epoch', yLabel: 'loss' });
        this.setState({onWaiting: false});
      });
    }
    test(trainRatio, batchSize=10){
      this.setState({onWaiting: true});
      let [train, test] = causalNet.splitDataset(trainRatio);
      termLogger.log({train: train.length, test: test.length});
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
      console.log({selectModels});
      causalNet.EnsembleModels = selectModels;
      this.setState({saveModels: modelList});
    }

    dataEmit({data, size}){
        termLogger.plot({type:'png', data: data, width: size[0], height:size[1]});
        this.promiseEmitter.resolve({data, size});
    }

    modelListener(infer){
      const { Predict, EnsemblePredict } = infer;
      if(Predict){
        termLogger.log({Predict: Predict[0]});
        this.setState({Predict: Predict[0]});
      }
      if(EnsemblePredict){
        termLogger.log({EnsemblePredict: EnsemblePredict[0]});
        this.setState({EnsemblePredict: EnsemblePredict[0]});
      }
    }

    render() {
        const { classes } = this.props;
        const { dataPreprocessed, onWaiting, dataChunks, saveModels } = this.state;
        let handlers = { fetchChunkHandler: this.fetchChunks, 
                         splitDataHandler: this.splitData, 
                         trainHandler: this.train, 
                         ensembleTrainHandler: (...args)=>this.ensembleTrain(saveModels.length, ...args),
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
              <Grid item sm={6} className={classes.card +` ${onWaiting?classes.freeze:''}`}>
                <Model BaseLink={this.BaseLink}
                  pipelineState={{onWaiting, dataPreprocessed}}
                  dataChunks={dataChunks} 
                  saveModels={saveModels}
                  handlers={handlers} />
                <Parameters/>
                <CanvasInput dataEmit={this.dataEmit}/>
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
