import React from 'react';
import ReactDOM from 'react-dom';
class MyTitle extends React.Component {
  constructor(props) {
      super(props);
      this.h1 = React.createRef();
  }
  componentDidMount(){
    console.log(this.h1);
    console.log(ReactDOM.findDOMNode(this.h1.current));
  }
  render() {
    return (
      <div>
        <h1 ref={this.h1}>Hello, {this.props.title}</h1>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default MyTitle;