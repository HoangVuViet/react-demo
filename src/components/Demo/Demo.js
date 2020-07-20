import React, { Component } from 'react';
import axios from 'axios';
import './Demo.css';
export default class Demo extends Component {
  // Calling the constructor of
  // Parent Class React.Component
  constructor(props) {
    // Initialization process
    super(props);
    this.state = { name: 'Hoang', list: [], check: false };
  }
  //Mounting
  componentWillMount() {
    console.log('[Demo.js] componentWillMount');
  }
  componentDidMount() {
    console.log('[Demo.js] componentDidMount');
    this.getUserInfor();
  }
  getUserInfor = () => {
    axios.get('http://jsonplaceholder.typicode.com/users').then((response) => {
      this.setState({ list: response });
    });
  };
  //Updating
  componentWillReceiveProps(newProps) {
    console.log('[Demo.js] componentWillReceiveProps');
  }
  shouldComponentUpdate(newProps, newState) {
    console.log('[Demo.js] shouldComponentUpdate:  ' + newState.name);
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('[Demo.js] componentWillUpdate: ' + nextState.name);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('[Demo.js] componentDidUpdate:  ' + prevState.name);
  }
  toggleNameHandler = () => {
    let checkName = this.state.check;
    if (!this.state.check) {
      this.setState({ name: 'Viet', check: !checkName });
    } else {
      this.setState({ name: 'Hoang', check: !checkName });
    }
  };
  //Unmounting
  componentWillUnmount() {
    console.log('[Demo.js] componentWillUnmount');
  }
  render() {
    console.log('[Demo.js] rendering,,,');
    return (
      <div className="Demo">
        <p>{this.props.counter}</p>
        <div className="Button" onClick={this.toggleNameHandler}>
          Name Toggle
        </div>
        <p>{this.state.name}</p>
        <p>{this.props.children}</p>
      </div>
    );
  }
}
