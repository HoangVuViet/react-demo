import React, { Component } from 'react';
export default class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    console.log('[Demo.js] componentWillMount');
  }
  componentDidMount() {
    console.log('[Demo.js] componentDidMount');
  }
  render() {
    console.log('[Demo.js] rendering,,,');
    return (
      <div className="Demo">
        <p>Hello from Demo.js</p>
      </div>
    );
  }
}
