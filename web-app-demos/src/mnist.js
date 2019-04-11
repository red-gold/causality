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
import { imagePreprocessing } from 'causal-net.preprocessing';
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
class NewsGroup extends React.Component {
    state = {
      pipelineState: {
        dataPreprocessed: false, 
        trainSplitted: false, 
        chunksFetched: false, 
        connected: false, 
        onWaiting: false
      },
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
    }
    componentDidMount() {
        this.setState({pipelineState: {onWaiting: true}});
        const init = async()=>{
            termLogger.connect('#logger');
            const sourceLink = 'http://0.0.0.0:5000/MNIST_dataset/';
            let {dataChunks} = await Connector({sourceLink});
            causalNet.setByConfig(PipeLineConfigure);
            this.setState({ dataChunks: dataChunks.length, 
                            pipelineState: {onWaiting: false}});
        };
        init();
    }

    getSaveList(){
        causalNet.getSavedParamList().then(saveList=>{
            this.setState({saveList: saveList});
        });
    }

    fetchChunks(numChunks){
        this.setState({pipelineState: {onWaiting: true}});
        causalNet.read(numChunks).then((fetchResult)=>{
            this.setState({pipelineState: {onWaiting: false}});
            termLogger.log({'fetch result': fetchResult});
        });
    }
    train(trainRatio, numEpochs=10, batchSize=50){
        this.setState({pipelineState: {onWaiting: true}});
        let [train, test] = causalNet.splitDataset(trainRatio);
        termLogger.log({train: train.length, test: test.length});
        causalNet.train(numEpochs, batchSize).then((trainResult)=>{
            termLogger.plot({
                type:'line', data: trainResult, 
                xLabel: 'epoch', yLabel: 'loss'});
            this.setState({pipelineState: {onWaiting: false}});
        });
        
    }
    ensembleTrain(trainRatio, numEpochs=10, batchSize=50){
        this.setState({pipelineState: {onWaiting: true}});
        let [train, test] = causalNet.splitDataset(trainRatio);
        termLogger.log({train: train.length, test: test.length});
        this.c = this.c?this.c+1:0;
        causalNet.ensembleTrain(numEpochs, batchSize, 'model_'+this.c).then((trainResult)=>{
            termLogger.log(trainResult);
            this.setState({pipelineState: {onWaiting: false}});
        });
    }
    test(batchSize=10){
        this.setState({pipelineState: {onWaiting: true}});
        causalNet.test(batchSize).then(testResult=>{
            termLogger.log(testResult);
            this.setState({pipelineState: {onWaiting: false}});
        });
    }
    dataEmit(data){
        let resdata = imagePreprocessing.imageResize(data, [150, 150], [28, 28]);
        termLogger.plot({type:'png', data: resdata, width: 28, height: 28});
    }
    render() {
        const { classes } = this.props;
        const { pipelineState, dataChunks } = this.state;
        let handlers = { fetchChunkHandler: this.fetchChunks, 
                         splitDataHandler: this.splitData, 
                         trainHandler: this.train, 
                         ensembleTrainHandler: this.ensembleTrain,
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
                  pipelineState={pipelineState}
                  dataChunks={dataChunks}
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
const NewsGroupDemo = withStyles(styles)(NewsGroup);
ReactDOM.render(<NewsGroupDemo/>, document.getElementById("content"));