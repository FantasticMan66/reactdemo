import React from 'react'; 
//引入需要用到的页面组件 
import Home from './home/index';
import About from './about/index';
import App from './App';
import MyLink from './link';
import Table from './table';
import File from './file';
//引入一些模块
import { BrowserRouter as Router, Route} from "react-router-dom";

function Myrouter(){
	return (
		<Router>
		   <Route path="/" component={App} />
		    <Route path="/home" component={Home} />
		    <Route path="/about" component={About} />
		    <Route path="/MyLink" component={MyLink} />
			<Route path="/table" component={Table} />
			<Route path="/file" component={File} />
		</Router>
	);
}

export default Myrouter;