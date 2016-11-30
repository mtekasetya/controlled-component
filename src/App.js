import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Input';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleBlur(e) {
    this.setState({value: e.target.value});
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <form>
          <p className="App-intro">
              <Input value={this.state.value} onChange={this.handleChange} onBlur={this.handleBlur} />
          </p>
        </form>
      </div>
    );
  }
}
