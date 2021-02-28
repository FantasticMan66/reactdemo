import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Myrouter from './Route';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom";
 ReactDOM.render(<Router><Myrouter/></Router>
 , document.getElementById('root'));

serviceWorker.unregister();

