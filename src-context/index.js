import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import A from './A';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<A />, document.getElementById('root'));
serviceWorker.unregister();
