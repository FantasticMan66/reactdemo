import React from 'react';
import ReactDOM from 'react-dom';
import mycontextOne from './A';
class C extends React.Component{
  constructor(props) {
      super(props);
  }
  render () {
  	console.log(mycontextOne.Consumer);
    return (
      <React.Fragment>
      	{/*<mycontextOne.Consumer>
      	{
      		obj=><div>{obj}</div>
  		}
        </mycontextOne.Consumer>*/}
       <div>CCCCCC</div>
      </React.Fragment>
      );
  }
}

export default C;