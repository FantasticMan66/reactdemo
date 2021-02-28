import React from 'react';
import ReactDOM from 'react-dom';
export let mycontextOne = React.createContext('hello world!');
console.log(mycontextOne);
class A extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
      	number: 1
      }
      this.setNumber = this.setNumber.bind(this);
  }
  setNumber(){
  	let number = this.state.number + 1;
  	this.setState({
  		'number':number
  	});
  }
  shouldComponentUpdate(prop,state,context){
  	console.log(prop,state,context);
  	if (state.number >=5) {
  		return false;
  	}else{
  		return true;
  	}
  }
  render () {
    return (
      <React.Fragment>
        <button onClick={this.setNumber}>设置</button>
       <mycontextOne.Provider value={this.state.number}>
       	  <B/>
       </mycontextOne.Provider>

      </React.Fragment>
      );
  }
}

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

class C extends React.Component{
  constructor(props,context) {
      super(props);
      console.log(context);
  }
  render () {
    return (
      <React.Fragment>
      	<mycontextOne.Consumer>
      	{
      		obj=><div>{obj}</div>
  		}
        </mycontextOne.Consumer>
       <div>CCCCCC</div>
      </React.Fragment>
      );
  }
}

export default A;