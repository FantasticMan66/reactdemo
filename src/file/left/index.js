import React, { Component } from "react";
//   import person1 from './person1.jpg'; //方法1引入图片前准备，后面将用src={logo}引入
class Left extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    console.log("update");
  }
  componentWillUnmount() {
    console.log("componentwillunmount");
  }
  render() {
    return (
      <>
        <div className="_leftupload">
          <div className="_up">
            <span>上传</span>
          </div>
          <div className="_down"></div>
          <input type="file"/>
　　　　　 <input type="button" value="导入"/>
        </div>
      </>
    );
  }
}

export default Left;
