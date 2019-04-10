import React  from "react";
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/lab/Slider';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { causalNet } from 'causal-net';
const styles = theme => ({
    'model > *':{
        'margin-bottom': 5
    }
});

class Model extends React.Component {
    state = {
        numChunks: 1,
        trainRatio: 0.5,
        dataPreprocessed: false, 
        trainSplitted: false, 
        chunksFetched: false,
        chunksFetched: false,
    }
    constructor(props) {
      super(props);
      
      this.componentDidMount = this.componentDidMount.bind(this);
      this.setTrainDataHandler = this.setTrainDataHandler.bind(this);
      this.trainModelHandler = this.trainModelHandler.bind(this);
      this.testModelHandler = this.testModelHandler.bind(this);
      this.setChunkHandler = this.setChunkHandler.bind(this);
      this.BaseLink = props.BaseLink;
      
      console.log(this.BaseLink);
    }
    
    componentDidMount() {

    }
    setChunkHandler(event, value){
        this.setState({ numChunks: value });
    }
    fetchChunkHandler(){

    }
    trainModelHandler(event){
        
    }
    testModelHandler(event){
        console.log('test click');
    }
    setTrainDataHandler(event, value){
        this.setState({ trainRatio: value });
    }
    render() {
        const { classes } = this.props;
        const { numChunks, trainRatio, dataPreprocessed, trainSplitted, chunksFetched } = this.state;
        return (
            <div className={classes["model > *"]}>
            <Typography id="label">
                Number of chunk to process {numChunks}
            </Typography>
            <Slider value={numChunks} aria-labelledby="label"
                min={1} max={10} step={1} onChange={this.setChunkHandler} />
            <Button onClick={this.fetchChunkHandler} variant="contained" 
                color="primary" align="left">
                Fetch and preprocess
            </Button>
            <Typography id="label">
                Train data ratio {trainRatio}
            </Typography>
            <Slider value={trainRatio} aria-labelledby="label"
                min={0.1} max={0.9} step={0.1} onChange={this.setTrainDataHandler} />
            <Button onClick={this.trainModelHandler} 
                variant="contained" color="primary" align="left">
                Train
            </Button>
            <Button onClick={this.testModelHandler} 
                variant="contained" color="primary" align="left">
                Test
            </Button>
            </div>
        );
    }
}

export default withStyles(styles)(Model);