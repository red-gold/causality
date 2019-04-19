import React  from "react";
import ReactDOM from "react-dom";
import { termLogger } from 'causal-net.log';
export default class Logger extends React.Component {
    constructor(props) {
      super(props);
      this.componentDidMount = this.componentDidMount.bind(this);
      this.ref = React.createRef();
    }

    componentDidMount() {
      console.log('logger mount');
    }
    
    render() {
        const { className } = this.props;
        return (<div id="logger" ref={this.ref} className={className}></div>);
    }
}