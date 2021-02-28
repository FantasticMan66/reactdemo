import { Button } from "antd";
import React, { Component ,PureComponent} from "react";

class Circle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diameter: 90,
    };
  }
  // shouldComponentUpdate(nextprops) {
  //   if (this.state.diameter ==  nextprops.diameter) {
  //     return false
  //   }else {
  //     return true;
  //   }
  // }
  componentDidUpdate() {
    console.log(this.refs);
    console.log(this.props);
    const diameter = this.props.diameter;
    this.refs.myInput.style.width = diameter + "px";
    this.refs.myInput.style.height = diameter + "px";
    this.refs.myInput.style.borderRadius = diameter + "px";
    this.setState.diameter = diameter;
  }
  render() {
    return (
      <>
        <div ref="myInput" style={{ backgroundColor: "red" }}></div>
      </>
    );
  }
}

export default Circle;
