import React from 'react';
import ReactDOM from 'react-dom';
import MyTitle from './title';
import JSX from './jsx';
class Counter extends React.Component{
  constructor(props) {
      super(props);
      this.state = {clickCount: 0};
      this.handleClick = this.handleClick.bind(this);
      this.h3 = React.createRef();
      console.log('..............加载前...........');
      console.log(this.refs.h1);
      console.log(this.h2);
      console.log(this.h3);
      console.log('..............................');
  }
  
  handleClick() {
    this.setState(function(state) {
      return {clickCount: state.clickCount + 1};
    });
  }
  componentDidMount(){
    console.log('..............加载后...........');
    console.log(this.refs.h1);
    console.log(this.h2);
    console.log(this.h3);
    console.log('...............................');
  }
  componentWillUnmount(){
    alert('componentWillUnmount');
  }
  render () {
    let ar = [
      <h1>使用数组创建 hello world</h1>,
      <h2>使用数组创建 hello world</h2>
    ];
    return (
      <React.Fragment>
        <div>
          {ar}
        </div>
        <h1 ref="h1">Hello,标题h1</h1>
        <h1 ref={(r)=>{this.h2=r}}>Hello,标题h2</h1>
        <MyTitle title={"标题h3"} ref={this.h3}>标题h3</MyTitle>
        <MyTitle title="标题h3">
            <span>{'测试this.props.children'}</span>
        </MyTitle>
        <h2 onClick={this.handleClick}>点我！点击次数为: {this.state.clickCount}</h2>
        <JSX></JSX>
      </React.Fragment>
      );
  }
}

export default Counter;