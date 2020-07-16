import React, { Component } from 'react';
import './App.css';
import Demo from '../components/Demo/Demo';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  //Mounting
  componentWillMount() {
    console.log('[App.js] componentWillMount');
  }
  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }
  render() {
    console.log('[App.js] rendering...');
    return (
      <div className="App">
        <p>Hello from App.js</p>
        <Demo></Demo>
      </div>
    );
  }
}

export default App;
