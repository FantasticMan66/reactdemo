import React from 'react';
import ReactDOM from 'react-dom';
import C from './C'
class B extends React.Component{
  constructor(props) {
      super(props);
  }
  render () {
    return (
      <React.Fragment>
       <div>BBBBBB</div>
       <C/>
      </React.Fragment>
      );
  }
}

export default B;