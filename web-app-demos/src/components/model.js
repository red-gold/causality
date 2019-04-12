import React  from "react";
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/lab/Slider';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { white, hidden } from "ansi-colors";
const styles = theme => ({
    model:{
        
    },
    slider:{
        'padding-top': '25px',
        margin: theme.spacing.unit,
    },
    info:{
        color: 'white',
        'text-align': 'right',
        margin: theme.spacing.unit,
    },
    button:{
        margin: theme.spacing.unit,
        
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
      this.setBatchSizeHandler = this.setBatchSizeHandler.bind(this);
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
        const { classes, pipelineState, dataChunks, handlers, saveModels, ensembleModels } = this.props;
        const { fetchChunkHandler, trainHandler, 
                testHandler, ensembleTrainHandler, setEnsembleModels, resetStorageHandler } = handlers;
        const { dataPreprocessed, onWaiting } = pipelineState;
        const { trainRatio, numChunks, numEpochs, batchSize } = this.state;
        return (
            <div className={classes.model} >
                <pre>{JSON.stringify(pipelineState, null, 2) }</pre>
                <Typography  className={classes.info} >
                    reset storage to deleted cache items from previous training including save models
                </Typography>
                <Button onClick={resetStorageHandler} variant="contained" 
                    className={classes.button}
                    color="primary" align="right">
                    Reset
                </Button>
                <Typography  className={classes.info} >
                    Number of chunk to process {numChunks} from total {dataChunks}
                </Typography>
                <Slider value={numChunks} 
                    className={classes.slider}
                    min={1} max={10} step={1} onChange={this.setChunkHandler} />
                <Button onClick={()=>fetchChunkHandler(numChunks)} variant="contained" 
                    className={classes.button}
                    color="primary" 
                    align="right">
                    Fetch and preprocess
                </Button>
                <Typography 
                    className={classes.info}> Train data ratio {trainRatio}
                </Typography>
                <Slider value={trainRatio}
                    className={classes.slider}
                    min={0.1} max={0.9} step={0.1} 
                    onChange={this.setTrainDataHandler} />
                <Typography  
                    className={classes.info}> Number of epoch {numEpochs}
                </Typography>
                <Slider value={numEpochs}
                    className={classes.slider}  
                    min={1} max={1000} step={1} 
                    onChange={this.setNumEpochHandler} />
                <Typography  
                    className={classes.info}> Batch size {batchSize}
                </Typography>
                <Slider value={batchSize}
                    className={classes.slider}  
                    min={1} max={100} step={1} onChange={this.setBatchSizeHandler} />
                <Button onClick={()=>trainHandler(trainRatio, numEpochs, batchSize)} 
                    className={classes.button}
                    variant="contained" color="primary" align="left">
                    Train
                </Button>
                <Button onClick={()=>ensembleTrainHandler(trainRatio, numEpochs, batchSize)} 
                    className={classes.button}
                    variant="contained" color="primary" align="left">
                    Ensemble Train
                </Button>
                <Button onClick={()=>testHandler(batchSize)} 
                    className={classes.button}
                    variant="contained" color="primary" align="left">
                    Test
                </Button>
                <List className={classes.list}>
                    {saveModels.map(({name, selected}, idx)=>{
                        return (<ListItem button
                                    selected={selected} 
                                    key={name} 
                                    onClick={event => setEnsembleModels(saveModels, idx, !selected)}>
                                    {name}</ListItem>);    
                    })}
                </List>
            </div>
        );
    }
}

export default withStyles(styles)(Model);