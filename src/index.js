import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Navigation from './components/Navigation';
import App from './components/App';
import './index.css';


ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path="/" render={() => <Navigation><App /></Navigation>}></Route>
        </Switch>
    </Router>,

    document.getElementById('root')
);


