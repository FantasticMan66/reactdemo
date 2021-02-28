import React, { Component } from "react";
import Left from './left/index'
import "./index.css";
//   import person1 from './person1.jpg'; //方法1引入图片前准备，后面将用src={logo}引入
class File extends Component {
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
    let { imageurl } = this.props;
    console.log(imageurl);
    return (
      <>
        <div className="_File_">
            {/* <div className="_leftupload">
                <div className="_up">
                    <span>上传</span>
                </div>
                <div className="_down">

                </div>
            </div> */}
            <Left></Left>
            <div className="_middle">
                <div className="_circle">相似度</div>
                <button>人脸比对</button>
            </div>
            <Left></Left>
            {/* <div className="_leftupload">
                <div className="_up">
                    <span>上传</span>
                </div>
                <div className="_down">

                </div>
            </div> */}
        </div>
      </>
    );
  }
}

export default File;
