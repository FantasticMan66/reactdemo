import React, { Component } from 'react';
import {Link,NavLink} from "react-router-dom";
export default class MyLink extends Component {
  render() {
    return ( <div>
    <ul>
      <li><Link to="/about">about</Link></li>
      <li><Link to="/home/about">home</Link></li>
      <li><NavLink to={'/App'} activeStyle={{width:'200px',display:'block'}}>Gallery</NavLink></li>
    </ul>
  </div>)
  }
}