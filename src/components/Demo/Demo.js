import React, { Component } from 'react';
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
