import ReactDOM from "react-dom";
import React from "react";
import { default as Logger } from './components/logger';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { termLogger } from 'causal-net.log'; 
import { causalNet } from 'causal-net'; 
import { indexDBStorage } from 'causal-net.storage'; 
import TextField from '@material-ui/core/TextField';
import { PipeLineConfigure, Connector } from './pipeline/20newsgroup.pipeline';

import { default as Model } from './components/model';
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
class News20Group extends React.Component {
    state = {
      onWaiting: false,
      dataPreprocessed: false,
      saveModels: [],
      dataChunks: 0,
      inputText: ''
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
        this.keyPress = this.keyPress.bind(this);
    }
    componentDidMount() {
        this.setState({onWaiting: true});
        const init = async ()=>{
            termLogger.connect('#logger');
            const sourceLink = 'http://0.0.0.0:5000/20newsgroups/';
            let {dataChunks, promiseEmitter, className } = 
              await Connector({ sourceLink, listener: this.modelListener });
            causalNet.setByConfig(PipeLineConfigure);
            this.promiseEmitter = promiseEmitter;
            this.className = className;
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

    dataEmit(e){
        this.setState({ inputText: e.target.value });
        
    }

    keyPress(e){
      if(e.keyCode == 13){
        termLogger.log({'input new text': e.target.value});
        this.promiseEmitter.resolve(e.target.value);
      }
   }

    modelListener(infer){
      const { Predict } = infer;
      if(Predict){
        termLogger.log({ PredictLabel: this.className[Predict[0]], Predict: Predict[0] });
      }
    }

    render() {
        const { classes } = this.props;
        const { dataPreprocessed, onWaiting, dataChunks, saveModels, inputText } = this.state;
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
                  This is ensemble demo for training text label with 20 news group dataset.
                </p>
              </Grid>
              <Grid item sm={6} className={classes.card}>
                <Model BaseLink={this.BaseLink}
                  pipelineState={{onWaiting, dataPreprocessed}}
                  dataChunks={dataChunks} 
                  saveModels={saveModels}
                  handlers={handlers} />
                <TextField
                  id="standard-name"
                  label="input sentence to detect topic"
                  className={classes.textField}
                  value={inputText}
                  onKeyDown={this.keyPress} 
                  onChange={this.dataEmit}
                />
              </Grid>
              <Grid item sm={6} className={classes.card}>
                <Logger className={classes.logger}/>
              </Grid>
            </Grid>            
          </div>
        );
    }
}

const News20GroupDemo = withStyles(styles)(News20Group);
ReactDOM.render(<News20GroupDemo/>, document.getElementById("content"));
