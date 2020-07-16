import React, { Component } from 'react';
import axios from 'axios';
export default class Demo extends Component {
  //Gọi constructor của parent class Component
  constructor(props) {
    // Qúa trình khởi tạo
    // Bao gồm set up state và props
    super(props);
    this.state = {};
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
    axios
      .get('http://jsonplaceholder.typicode.com/users')
      .then((response) => this.setState({ ...response }));
    console.log(this.state);
  };
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.list === nextState.list;
  }
  componentWillUpdates(nextProps, nextState) {
    console.log('[Demo.js] ComponentWillUpdate');
  }
  render() {
    console.log('[Demo.js] rendering,,,');
    return (
      <div>
        <p>{this.props.counter} times</p>
        <button onClick={this.props.counting}>Submit</button>
        <p>{this.props.children}</p>
      </div>
    );
  }
}
