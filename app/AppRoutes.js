import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import MainContainer from './containers/MainContainer';

const routes = (
    <Router history={hashHistory}>
        <Route path='/' component={MainContainer}>
        </Route>
    </Router>
)

export default routes
