import React, { Component } from 'react';
import {Link} from "react-router-dom";
export default class MyLink extends Component {
  render() {
    return ( <div>
    <ul>
      <li><Link to="/about">about</Link></li>
      <li><Link to="/home">home</Link></li>
    </ul>
  </div>)
  }
}