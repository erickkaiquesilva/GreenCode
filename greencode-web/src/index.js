import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './scenes/App';
import * as serviceWorker from './serviceWorker';
import {Router, Route, hasHistory} from 'react-router';

ReactDOM.render(
    <Router history={hasHistory}>
        <Route path='/' component={App} />
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
