import React, {
  Component
} from 'react';

// export default class Home extends Component {
//   render() {
//     return (<h1>
//       欢迎，这里是Home
//     </h1>)
//   }
// }
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
    return ( 
     <h1 >
      欢迎， 这里是Home 
      </h1>)
    }
}

export default Home;