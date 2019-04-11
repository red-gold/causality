import ReactDOM from "react-dom";
import React  from "react";
import { default as Logger } from './components/logger';
import { default as Model } from './components/model';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { causalNet } from 'causal-net'; 
import { termLogger } from 'causal-net.log'; 

import { PipeLineConfigure, Connector } from './pipeline/20newsgroup.pipeline';
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
      pipelineState: false,
    }
    constructor(props) {
      super(props);
      this.BaseLink = 'http://0.0.0.0:5000/MNIST_dataset/';
      this.componentDidMount = this.componentDidMount.bind(this);  
      this.fetchData = this.fetchData.bind(this);

    }
    async componentDidMount() {
      
      // causalNet.setByConfig(PipeLineConfigure);
      // termLogger.log(causalNet.Parameters);
      // let models = ['Model1', 'Model2', 'Model3'];
      
      // causalNet.EnsembleModels = models;
      // causalNet.deploy().then(res=>console.log(res));
    }
    plotRef(plot){
      return plot;
    }
    async trainHander(){
      let models = ['Model1', 'Model2', 'Model3'];
      let losses = {};
      for(let model of models){
          let result = await causalNet.ensembleTrain(2, 1, model);
          losses = {...losses, ...{[model]: result[model]['losses']}};
      }
    }
    render() {
      const { classes } = this.props;
      const { pipelineState } = this.state;
        return (
          <div>
            <Grid container spacing={16} justify="center" className={classes.layout}>
              <Grid item sm={12} className={classes.card}>
                <p>
                  This is ensemble demo for training classification model with 20newsgroup text dataset.
                </p>
              </Grid>
              <Grid item sm={6} className={classes.card}>
                <Model BaseLink={this.BaseLink}
                  pipelineState={pipelineState}
                  trainHander={this.trainHander}
                  testHander={this.testHander}
                  fetchData={this.fetchData}/>
              </Grid>
              <Grid item sm={6} className={classes.card}>
                <Logger className={classes.logger} plotRef={this.plotRef}/>
              </Grid>
              
            </Grid>            
          </div>
        );
    }
}
const NewsGroupDemo = withStyles(styles)(NewsGroup);
ReactDOM.render(<NewsGroupDemo/>, document.getElementById("content"));