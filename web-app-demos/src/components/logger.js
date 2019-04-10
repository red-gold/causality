import React  from "react";
import ReactDOM from "react-dom";
import { termLogger } from 'causal-net.log';
export default class Logger extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'coconut'};
      this.componentDidMount = this.componentDidMount.bind(this);
      this.ref = React.createRef();
    }

    componentDidMount() {
        termLogger.connect('#logger');
        termLogger.groupBegin('new group');
        let { width } = this.ref.current.getBoundingClientRect();
        width = width - 40;
        let height = width*0.8;
        termLogger.plot({type:'line', data: [1,2,3,4], width, height});
        termLogger.plot({type:'line', data: [1,2,3,4], width, height});
        termLogger.groupEnd();
    }

    
    render() {
        const { className } = this.props;
        console.log({className});
        return (<div id="logger" ref={this.ref} className={className}></div>);
    }
}