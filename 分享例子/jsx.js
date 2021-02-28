import React from 'react';
import ReactDOM from 'react-dom';
class JSX extends React.Component {
  constructor(props) {
      super(props);
      this.state = {t:''};
  }
  componentDidMount(){

  }
  render() {
    let v1 = "<script><\/script>";
    let v2 = {
      __html : "<script><\/script>"
    }
    let obj = {
       name:'span'
    }
    return (
      <>
      
      <h1 style={{color:'red'}}>Hello,world</h1>

      <h3>{()=>{return 1}}</h3>

      <h1>{this.getTitle(0)}</h1>
      <h1>{this.getTitle(1)}</h1>
      <h1>{this.getTitle(2)}</h1>

      <h1>{v1}</h1>
      <h1 dangerouslySetInnerHTML={v2}></h1>

      <obj.name>222</obj.name>

      <span>{false}</span>
      <span>{true}</span>
      <span>{undefined}</span>

      <span>{NaN}</span>
      
      <div>
           
           Hello
      World

      </div>
      </>
    );
  }
  getTitle(t){
    let obj = ['hello world','hello friend'];
    if (t>=2){
       return <span>111</span>
    }
    return obj[t];

  }
}

export default JSX;