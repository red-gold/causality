import React  from "react";
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/lab/Slider';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
    model:{
        '> *':{
            'padding-bottom':10
        }
    }
});

class Model extends React.Component {
    state = {
        numChunks: 1,
        trainRatio: 0.5,
        numEpochs: 50,
        batchSize: 50,
        dataPreprocessed: false, 
        trainSplitted: false, 
        chunksFetched: false,
        chunksFetched: false,
    }
    constructor(props) {
      super(props);     
      this.setChunkHandler = this.setChunkHandler.bind(this);
      this.setTrainDataHandler = this.setTrainDataHandler.bind(this);
      this.setNumEpochHandler = this.setNumEpochHandler.bind(this);
      this.setBatchSizeHandler = this.setNumEpochHandler.bind(this);
    }
    
    componentDidMount() {

    }
    setChunkHandler(event, value){
        this.setState({ numChunks: value });
    }

    setNumEpochHandler(event, value){
        this.setState({ numEpochs: value});
    }

    setBatchSizeHandler(event, value){
        this.setState({ batchSize: value});
    }
    
    setTrainDataHandler(event, value){
        this.setState({ trainRatio: value });
    }
    render() {
        const props = this.props;
        const { classes, pipelineState, dataChunks, handlers } = this.props;
        const { fetchChunkHandler, trainHandler, testHandler, ensembleTrainHandler } = handlers;
        const { dataPreprocessed, trainSplitted, chunksFetched, connected, onWaiting } = pipelineState;
        const { trainRatio, numChunks, numEpochs, batchSize } = this.state;
        return (
            <div className={classes.model}>
                <Typography id="label" >
                    Number of chunk to process {numChunks} from total {dataChunks}
                </Typography>
                <Slider value={numChunks} aria-labelledby="label"
                    min={1} max={10} step={1} onChange={this.setChunkHandler} />
                <Button onClick={()=>fetchChunkHandler(numChunks)} variant="contained" 
                    color="primary" align="left">
                    Fetch and preprocess
                </Button>
                <Typography id="label">
                    Train data ratio {trainRatio}
                </Typography>
                <Slider value={trainRatio} aria-labelledby="label"
                    min={0.1} max={0.9} step={0.1} onChange={this.setTrainDataHandler} />
                <Typography id="label">
                    Number of epoch {numEpochs}
                </Typography>
                <Slider value={numEpochs} aria-labelledby="label"
                    min={1} max={1000} step={1} onChange={this.setNumEpochHandler} />
                <Typography id="label">
                    Batch size {batchSize}
                </Typography>
                <Slider value={batchSize} aria-labelledby="label"
                    min={1} max={100} step={1} onChange={this.setBatchSizeHandler} />
                <Button onClick={()=>trainHandler(trainRatio, numEpochs, batchSize)} 
                    variant="contained" color="primary" align="left">
                    Train
                </Button>
                <Button onClick={()=>ensembleTrainHandler(trainRatio, numEpochs, batchSize)} 
                    variant="contained" color="primary" align="left">
                    Ensemble Train
                </Button>
                <Button onClick={()=>testHandler(batchSize)} 
                    variant="contained" color="primary" align="left">
                    Test
                </Button>
            </div>
        );
    }
}

export default withStyles(styles)(Model);