import React  from "react";
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
    canvasInput:{
        border: '1px solid white',
        width: 150,
        height: 150
    }
});
class CanvasInput extends React.Component {
    state = {
        onDraw : false
    }
    constructor(props) {
      super(props);
      this.canvasRef = React.createRef();
      this.componentDidMount = this.componentDidMount.bind(this);
      this.draw = this.draw.bind(this);
    }

    componentDidMount() {
        let canvas = this.canvasRef.current;
        const {left, top, x, y} = canvas.getBoundingClientRect();
        console.log({left, top, x, y});
        this.canvasLeft = x;
        this.canvasTop = y;
    }

    draw(event, begin, end, onDraw){
        var context = canvas.getContext('2d');
        const Coodinator = (event)=>{
            return { x: event.clientX - this.canvasLeft, 
                     y: event.clientY - this.canvasTop };
        };
        var start = function(coors) {
            console.log({coors});
            context.beginPath();
            context.moveTo(coors.x, coors.y);
        };
        var move = function(coors) {
            console.log({coors});
            context.strokeStyle = "#fff";
            context.lineJoin = "round";
            context.lineWidth = 3;
            context.lineTo(coors.x, coors.y);
            context.stroke();
        };
        if(begin && !onDraw){
            this.setState({onDraw:true});
            start(Coodinator(event));
        }
        if(end && onDraw){
            this.setState({onDraw:false});
            let data = context.getImageData(0, 0, 150, 150).data;
            context = canvas.getContext('2d');
            context.clearRect(0, 0, 150, 150);
            if(this.props.dataEmit){
                this.props.dataEmit(data);
            }
        }
        if(onDraw){
            move(Coodinator(event));
        }
    }
    
    render() {
        const { classes } = this.props;
        const { onDraw } = this.state;
        return (<canvas id="canvas" 
                    onMouseDown={(event)=>this.draw(event, true, false, onDraw)}
                    onMouseMove={(event)=>this.draw(event, false, false, onDraw)}
                    onMouseUp={(event)=>this.draw(event, false, true, onDraw)}
                    ref={this.canvasRef} 
                    className={classes.canvasInput} ></canvas>);
    }
}

export default withStyles(styles)(CanvasInput);