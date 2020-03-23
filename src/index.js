import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Page from './PageLayout';
import App from './App';
import App_Class from './App_Class';
import App_Function from './App_Function';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Page />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
