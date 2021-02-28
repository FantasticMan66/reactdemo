import React from 'react';
//引入需要用到的页面组件 
import Home from './home';
import About from './about';
import App from './App';
import MyLink from './link';
import Base from './base';
import {withRouter} from 'react-router-dom' 
//引入一些模块

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
const getConfirmation = (message, callback) => {
	const allowTransition = window.confirm(message)
	callback(allowTransition)
}
class Myrouter extends React.Component {
	constructor(props){
		super(props);

	}
	componentDidMount(){
		console.log(this.props);
	}
	render() {
		return (
			<div>
			<Router getUserConfirmation={getConfirmation}>
				<div style={{ color: 'red' }}>
					<Route path="/about" component={About} />
					<Route path="/home/about" component={About} />
					<Route path="/MyLink" component={MyLink} />
					<Route path="/App" component={App}>
						<Route path="/App/Base" component={Base} />
					</Route>
					<Route path="/App/Base" component={Base} />
					<Route path="/App" exact component={App} />
					<Route path="/func" render={(props => <App></App>)} />
					<Route path="/func2" render={(props => <div>2222</div>)} />
					<Route path="/" component={Home} />
				</div>
			</Router>
			</div>
		);
	}
}

export default withRouter(Myrouter);