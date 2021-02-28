import React from 'react'; 
//引入需要用到的页面组件 
import Home from './home';
import About from './about';
import App from './App';
import MyLink from './link';
import Base from './base';
//引入一些模块

import { BrowserRouter as Router, Route,Switch,Redirect} from "react-router-dom";
const getConfirmation = (message, callback) => {
  const allowTransition = window.confirm(message)
  callback(allowTransition)
}
function Myrouter(){
	return (
		<Router getUserConfirmation={getConfirmation}>
			<div style={{color:'red'}}>	
			
			    <Route path="/home/about" component={About} />
			    <Route path="/MyLink" component={MyLink} />
			    
			</div>
		</Router>
	);
}

export default Myrouter;