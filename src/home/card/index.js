  import React, {
    Component
  } from 'react';
  import './index.css'
//   import person1 from './person1.jpg'; //方法1引入图片前准备，后面将用src={logo}引入
  class Card extends Component {
    constructor(props) {
      super(props);
    }
    componentDidMount() {
      console.log('componentDidMount');
    }
    componentDidUpdate() {
      console.log('update');
    }
    componentWillUnmount() {
      console.log('componentwillunmount');
    }
    render() {
      let {imageurl} = this.props;
      console.log(imageurl);
      return ( 
        <>
          <div className="card">
            <div className="card_img">
                <img src={require('./'+imageurl+'.jpg')}></img>
            </div>
            <div className="cards_operate">
                <button className="first-button">看</button>
                <button>注</button>
                <button>图</button>
                <button>搜</button>
            </div>
          </div>
        </>
      )}
  }
  
  export default Card;