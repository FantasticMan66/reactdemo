import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import Myrouter from './Route';
import * as serviceWorker from './serviceWorker';

 ReactDOM.render(<Myrouter/>, document.getElementById('root'));

serviceWorker.unregister();

