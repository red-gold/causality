import ReactDOM from "react-dom";
import React from "react";
import { default as Logger } from './components/logger';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { termLogger } from 'causal-net.log'; 
import { causalNetSGDOptimizer } from 'causal-net.optimizers';
import { causalNetModels } from 'causal-net.models';
import { causalNetParameters, causalNetLayers } from 'causal-net.layer';
import { causalNetDataSource } from 'causal-net.datasets';
import { universalEmbedding } from 'causal-net.representation';
import { causalNet } from 'causal-net'; 
import { indexDBStorage } from 'causal-net.storage'; 
import TextField from '@material-ui/core/TextField';

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
class MNIST extends React.Component {
    state = {
      onWaiting: false,
      inputText: ''
    }
    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);  
        this.modelListener = this.modelListener.bind(this);
        this.keyPress = this.keyPress.bind(this);
        this.dataEmit = this.dataEmit.bind(this);
    }
    componentDidMount() {
        this.setState({onWaiting: true}); 
        const init = async()=>{
          termLogger.connect('#log');
          termLogger.groupBegin('compare sentences');
          await universalEmbedding.connect();
          let sentenceA = 'this is';
          let sentenceB = 'this is';
          console.log({ sentenceA, sentenceB});
        //   let vecs = await universalEmbedding.sentenceEncode([sentenceA]);
        //   vecs.print();
        //   let resultScore = await universalEmbedding.encodeMatching( sentenceA , sentenceB );
        //   let matchScore = await resultScore.data();
        //   console.log({'matching score': matchScore[0], sentenceA, sentenceB});
          termLogger.groupEnd();
        //   this.setState({ onWaiting: false});
        };
        init();
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
        termLogger.log({Predict: Predict[0]});
        this.setState({Predict: Predict[0]});
      }
    }

    render() {
        const { classes } = this.props;
        const { onWaiting, inputText } = this.state;
        return (
          <div>
            <Grid container spacing={16} justify="center" className={classes.layout}>
              <Grid item sm={12} className={classes.card}>
                <p>
                  This is ensemble demo for training text label with 20 news group dataset.
                </p>
              </Grid>
              <Grid item sm={6} className={classes.card}>
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

const MNISTDemo = withStyles(styles)(MNIST);
ReactDOM.render(<MNISTDemo/>, document.getElementById("content"));
