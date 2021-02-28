import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Counter from './clock';
import * as serviceWorker from './serviceWorker';

// createElement创建虚拟DOM
// var dom =  React.createElement('div',{className:'mydiv'},'hello world');
// console.log(ReactDOM.render(dom,document.getElementById('root'),()=>{alert('加载完成')}));


// createElement创建虚拟DOM,第三个元素可以为另一个虚拟DOM
// var dom =  React.createElement('div',{className:'mydiv'},'hello world');
// var dom2 = React.createElement('div',{className:'mydiv'},dom);
// ReactDOM.render(dom2,document.getElementById('root'),()=>{alert('加载完成')});


// jsx创建虚拟DOM
// var jsx = (<div className='mydiv'>hello world</div>);
// console.log(ReactDOM.render(jsx,document.getElementById('root'),()=>{alert('加载完成')}));

// 虚拟DOM最上层必须只有一个元素
// var jsx = (<div className='mydiv'>hello world</div><div className='mydiv'>hello world</div>);
// ReactDOM.render(jsx,document.getElementById('root'),()=>{alert('加载完成')});

// 可以用Fragment解决上述问题
//  var jsx = (<React.Fragment>
	// <div className='mydiv'>hello world</div>
//  		<div className='mydiv'>hello world</div>
//  	</React.Fragment>);
//  ReactDOM.render(jsx,document.getElementById('root'),()=>{alert('加载完成')});

//函数组件
// function HelloMessage(props) {
//     return <h1>Hello {props.name}!</h1>;
// }
// const jsx = <HelloMessage name="web"/>;
// console.log(ReactDOM.render(jsx,document.getElementById('root'),()=>{alert('加载完成')}));

// 组件
console.log(ReactDOM.render(<Counter />, document.getElementById('root')));
//ReactDOM.unmountComponentAtNode(document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
