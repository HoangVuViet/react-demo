import React, { Component } from 'react';
import axios from 'axios';
export default class Demo extends Component {
  //Gọi constructor của parent class Component
  constructor(props) {
    // Qúa trình khởi tạo
    // Bao gồm set up state và props
    super(props);
    this.state = { name: 'Vu', list: [], check: false };
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
  componentWillReceiveProps(nextProps, nextState) {
    console.log('[Demo.js] componentWillReceiveProps');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Demo.js] shouldComponentUpdate: ' + nextState.name);
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('[Demo.js] componentWillUpdate: ' + nextState.name);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('[Demo.js] componentDidUpdate: ' + prevState.name);
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
    console.log(this.state);
    console.log('[Demo.js] rendering,,,');
    return (
      <div>
        <button onClick={this.toggleNameHandler}>Name Toggle</button>
        <p>{this.state.name}</p>
        <p>{this.props.children}</p>
      </div>
    );
  }
}
