import ReactDOM from "react-dom";
import React  from "react";
import { default as Logger } from './components/logger';
import { default as Model } from './components/model';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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
    constructor(props) {
      super(props);
      this.state = {value: 'coconut'};
      this.BaseLink = 'http://http://0.0.0.0:5000/MNIST_dataset/';
    }
    render() {
      const { classes } = this.props;
        return (
          <div>
            <Grid container spacing={16} justify="center" className={classes.layout}>
              <Grid item sm={12} className={classes.card}>
                <p>
                  This is ensemble demo for training classification model with 20newsgroup text dataset.
                </p>
              </Grid>
              <Grid item sm={6} className={classes.card}>
                <Model BaseLink={this.BaseLink}/>
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