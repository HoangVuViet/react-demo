import React, { Component } from 'react';
import './App.css';
import Demo from '../components/Demo/Demo';
class App extends Component {
  // Calling the constructor of
  // Parent Class React.Component
  constructor(props) {
    // Initialzation process
    super(props);
    this.state = { count: 0 };
  }
  onClick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div className="App">
        <h1>Hello from App.js</h1>
        <div className="Button" onClick={this.onClick}>
          Counting
        </div>
        <hr></hr>
        <Demo counting={this.onClick} counter={this.state.count}>
          Hello from Demo.js
        </Demo>
      </div>
    );
  }
}

export default App;
