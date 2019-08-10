import ReactDOM from "react-dom";
import React from "react";
import { default as Logger } from './components/logger';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { termLogger } from 'causal-net.log'; 
import Button from '@material-ui/core/Button';
import { tokenizer } from 'causal-net.preprocessing';
import { universalEmbedding } from 'causal-net.representation';
import TextField from '@material-ui/core/TextField';
import { default as Model } from './components/model';
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
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginBottom: theme.spacing.unit*4,
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "white !important",
  },
  inputText: {
    color: "white"
  },
  label: {
    color: "white",
    '&focused': {
      color: "white"
    },
    focused: {
      "&$focused": {
        color: "white"
      },
      focused:{
        color: "white"
      }
    }
  },
  
  'freeze':{
    '& *':{
      'pointer-events': 'none',
      'opacity': 0.5
    }
  }
});

class Pose extends React.Component {
    state = {
      onWaiting: false,
      sentenceA: 'dog',
      sentenceB: 'cat'
    }
    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);  
        this.modelListener = this.modelListener.bind(this);
        this.keyPress = this.keyPress.bind(this);
        this.dataEmit = this.dataEmit.bind(this);
        this.compareSentence = this.compareSentence.bind(this);
    }
    componentDidMount() {
        
        this.setState({onWaiting: true}); 
        const init = async()=>{
          termLogger.connect('#logger');
          termLogger.groupBegin('compare sentences');
          await tokenizer.connect(Config.TokenServer);
          await universalEmbedding.connect(Config.USEServer);
          termLogger.groupEnd();
          this.setState({ onWaiting: false});
        };
        init();
    }

    async compareSentence(sentenceA, sentenceB){
      let sentenceATokens = tokenizer.tokenize(sentenceA, false);
      termLogger.log({'first setence tokens': sentenceATokens });
      let sentenceBTokens = tokenizer.tokenize(sentenceB, false);
      termLogger.log({'second setence tokens': sentenceBTokens });
      let sentenceATokenIds = tokenizer.tokenize(sentenceA, true);
      let sentenceBTokenIds = tokenizer.tokenize(sentenceB, true);
      let resultScore = await universalEmbedding.encodeMatching( sentenceATokenIds , sentenceBTokenIds );
      let matchScore = await resultScore.data();
      termLogger.log({'matching score': matchScore[0], sentenceA, sentenceB});
    }
    
    dataEmit(e, sentenceName){
        this.setState({ [sentenceName]: e.target.value });
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
        const { onWaiting, sentenceA, sentenceB } = this.state;
        return (
          <div>
            <Grid container spacing={16} justify="center" className={classes.layout}>
              <Grid item sm={12} className={classes.card}>
                <p>
                  This is demo for text reprsentation based on universal word embedding model.
                  It would take several minutes for loading word vec model.
                </p>
              </Grid>
              <Grid item sm={6} className={classes.card +` ${onWaiting?classes.freeze:''}`}>
                
                <TextField
                  id="sentenceA" multiline rows="4"
                  label="first sentence" variant="outlined"
                  className={classes.textField} value={sentenceA}
                  InputLabelProps={{ classes: { root: classes.label } }}
                  InputProps={{ classes: 
                    { notchedOutline: classes.notchedOutline, input: classes.inputText } }}
                  onChange={(e)=>this.dataEmit(e,'sentenceA')}
                />
                <TextField
                  id="sentenceB" multiline rows="4"
                  label="second sentence" variant="outlined"
                  className={classes.textField} value={sentenceB}
                  InputLabelProps={{ classes: { root: classes.label } }}
                  InputProps={{ classes: 
                    { notchedOutline: classes.notchedOutline, input: classes.inputText } }}
                  onChange={(e)=>this.dataEmit(e,'sentenceB')} />
                <Button onClick={()=>this.compareSentence(sentenceA, sentenceB)} variant="contained" 
                    className={classes.button}
                    color="primary" 
                    align="right">
                    Compare
                </Button>
              </Grid>
              <Grid item sm={6} className={classes.card}>
                <Logger className={classes.logger}/>
              </Grid>
            </Grid>            
          </div>
        );
    }
}

const PoseDemo = withStyles(styles)(Pose);
ReactDOM.render(<PoseDemo/>, document.getElementById("content"));
