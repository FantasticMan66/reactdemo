import React, { Component } from 'react';
import Base from './base';
export default class App extends Component {
  render() {
    console.log(this.props);
    return <div>
        {this.props.children} web前端
    </div>

  }
}