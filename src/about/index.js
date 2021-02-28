import { Button } from "antd";
import React, { Component } from "react";
import "./index.css";
import Circle from "./circle/index";
import FCircle from "./fcircle/index";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diameter: 100,
      info: {
        diameter: 100,
      },
    };
  }
  setDiameter = (d) => {
    console.log(d);
    let info = this.state.info;
    info.diameter = d;
    //  this.setState(this.state);
    this.setState({});
  };
  setTest = (d) => {
    console.log(d);
    let info = this.state.info;
    info.test = d;
    //  this.setState(this.state);
    this.setState({});
  };
  
  render() {
    console.log("render");
    return (
      <>
        <div className="_about_">
          <div>
            <Button onClick={this.setDiameter.bind(this, 100)}>
              100像素圆
            </Button>
            <Button onClick={this.setDiameter.bind(this, 200)}>
              200像素圆
            </Button>
            <Button onClick={this.setTest.bind(this, 300)}>
              300像素圆
            </Button>
          </div>
          <div>
            <Circle diameter={this.state.diameter}></Circle>
          </div>
          <div>
            <FCircle diameter={this.state.diameter}></FCircle>
          </div>
          <span>{this.state.info.diameter}</span>
          <br/>
          <span>{this.state.info.test}</span>
        </div>
      </>
    );
  }
}

export default About;
