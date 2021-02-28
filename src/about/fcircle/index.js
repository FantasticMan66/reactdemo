import { Button } from "antd";
import React, { Component ,PureComponent} from "react";

const  FCircle = (props) =>{
    console.log(props);
      return (
      <>
        <div style={{ backgroundColor: "red",width:'100px',heigth:'100px',}}></div>
      </>
    );
  }

export default React.memo(FCircle);
