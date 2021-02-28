import React, { Component } from 'react';
import Base from './base/index';
export default class App extends Component {
  render() {
    return <div>
      {this.props.children || <Base/>}
    </div>
  }
}