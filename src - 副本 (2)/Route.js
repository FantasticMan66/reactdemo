import React from 'react'; 
//引入需要用到的页面组件 
import Home from './home';
import About from './about';
import App from './App';
import MyLink from './link';
//引入一些模块
import { BrowserRouter as Router, Route} from "react-router-dom";

function Myrouter(){
	return (
		<Router>
		   <Route path="/" component={App} />
		    <Route path="/:home/:name" component={Home} />
		    <Route path="/about" component={About} />
		    <Route path="/MyLink" component={MyLink} />
		</Router>
	);
}

export default Myrouter;