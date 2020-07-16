import React, { Component } from 'react';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      previousNumber: '',
      operator: '',
    };
  }
  render() {
    return (
      <div className="App">
        <p>Hello World</p>
      </div>
    );
  }
}

export default App;
