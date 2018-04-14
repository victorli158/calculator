import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      num1: '',
      num2: '',
      result: 0
    };
  }

  setNum1() {
    this.setState({ num1: $('#first').val() });
  }

  setNum2() {
    this.setState({ num2: $('#second').val() });
  }

  handleAdd(e) {
    e.preventDefault();
    this.setState({ result: parseInt(this.state.num1) + parseInt(this.state.num2) });
  }

  handleSubtract(e) {
    e.preventDefault();
    this.setState({ result: parseInt(this.state.num1) - parseInt(this.state.num2) });
  }

  handleMultiply(e) {
    e.preventDefault();
    this.setState({ result: parseInt(this.state.num1) * parseInt(this.state.num2) });
  }

  handleDivide(e) {
    e.preventDefault();
    this.setState({ result: parseInt(this.state.num1) / parseInt(this.state.num2) });
  }

  handleClear(e) {
    e.preventDefault();
    this.setState({ num1: '', num2: '', result: 0 });
  }

  render(){
    return (
      <div>
        <input id="first" onChange={this.setNum1.bind(this)} value={this.state.num1}></input>
        <input id="second" onChange={this.setNum2.bind(this)} value={this.state.num2}></input>
        <button id="add" onClick={this.handleAdd.bind(this)}>+</button>
        <button id="subtract" onClick={this.handleSubtract.bind(this)}>-</button>
        <button id="multiply" onClick={this.handleMultiply.bind(this)}>*</button>
        <button id="divide" onClick={this.handleDivide.bind(this)}>/</button>
        <button id="clear" onClick={this.handleClear.bind(this)}>Clear</button>
        <h1>{this.state.result}</h1>
      </div>
    );
  }
}

export default Calculator;
