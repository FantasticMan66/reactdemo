import React, {
  Component
} from 'react';
import Card from './card/index.js';
import { Pagination } from 'antd';
class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    alert('componentDidMount');
    console.log('componentDidMount');
  }
  componentDidUpdate() {
    alert('componentwillunmount');
    console.log('update');
  }
  componentWillUnmount() {
    alert('componentwillunmount');
    console.log('componentwillunmount');
  }
  render() {
    let ar = [1,2,3,4,5,6,7,8];
    return ( 
      <>
        <div className="contaner">{
          ar.map(function child(item,key) {
            return <Card key={key} imageurl={key<=3?'person1':'person2'}></Card>
          })}
          <div style={{position:'absolute',marginTop:'10px',right:'20px'}}>
            <Pagination defaultCurrent={1} total={50} />
          </div>
         
        </div>
       
      </>
    )}
}

export default Home;