import React  from "react";
import ReactDOM from "react-dom";
import { causalNet } from 'causal-net'; 
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
    model:{
        '> *':{
            'padding-bottom':10
        }
    }
});
class Parameters extends React.Component {
    state = {
        saveList: []
    }
    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.ref = React.createRef();
    }

    componentDidMount() {
        
    }
    
    render() {
        const { className } = this.props;
        return (<ul id="save parameter" ref={this.ref}></ul>);
    }
}

export default withStyles(styles)(Parameters);