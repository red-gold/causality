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
        const {left, top, x, y, offsetTop, offsetLeft } = canvas.getBoundingClientRect();
        
        this.canvasLeft = x;
        this.canvasTop = y;
    }

    draw(event, begin, end, onDraw){
        
        const Coodinator = (evt)=>{
            let canvas = this.canvasRef.current;
            var rect = canvas.getBoundingClientRect();
            return {
                x: (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width,
                y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height
            };
        };
        var start = function(coors) {
            let context = canvas.getContext('2d');
            context.beginPath();
            context.moveTo(coors.x, coors.y);
        };
        var move = function(coors) {
            let context = canvas.getContext('2d');
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
            let canvas = this.canvasRef.current;
            let context = canvas.getContext('2d');
            var rect = canvas.getBoundingClientRect();
            console.log([canvas.width, canvas.height, rect.right, rect.left, rect.bottom, rect.top]);
            var sX = canvas.width;
            var sY = canvas.height;
            let data = Array.from(context.getImageData(0, 0, sX, sY).data);
            context.clearRect(0, 0, sX, sY);
            context.beginPath();
            context.fillStyle = "rgba(0, 0, 0, 0)";
            context.fillRect(0, 0, sX, sY);
            context.stroke();

            if(this.props.dataEmit){
                this.props.dataEmit({data, size:[sX, sY]});
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