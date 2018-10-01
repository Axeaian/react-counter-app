import React, { Component } from 'react';
import Label from "./Label";

class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  handleClickAdd = () => this.setState(currentState => {return {value: currentState.value + 1}})
  handleClickDeduct = () => this.setState({value: this.state.value - 1})

  render() {
    return (
      <div className="border border-warning rounded center">
        <h1 className="badge badge-info">{this.props.name}</h1>
        <label className={this.state.value>0?"badge badge-success":
                          this.state.value<0?"badge badge-danger":
                          "badge badge-info"}>
          {<Label value={this.state.value}/>}
        </label>
        <h1 className="big">{this.state.value}</h1>
        <button className="btn btn-primary m-2" onClick={this.handleClickAdd}>+</button>
        <button className="btn btn-danger m-2" onClick={this.handleClickDeduct}>-</button>
    </div>
    );
  }
}

export default Counter;
