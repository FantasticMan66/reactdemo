import React, { Component } from 'react';

export default class About extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
		console.log(this.props.children);
	}
  render() {
  	console.log(this.props);
    return (<h1>
      欢迎，这里是about
    </h1>)
  }
}