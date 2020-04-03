import React from 'react'
import { render } from 'react-dom'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import App from './App'

import { mainRoutes } from './routes'

import './index.less'

render(
    <Router>
        <Switch>
            <Route path="/admin" render={(routerProps) => {
                // TODO: admin permission 
                return <App {...routerProps} />
            }} />
            {
                mainRoutes.map(route => {
                    return <Route key={route.pathname} path={route.pathname} component={route.component} exact />
                })
            }
            <Redirect to="/admin" from="/" exact />
            <Redirect to="/404" exact />
        </Switch>
    </Router>,
    document.querySelector('#root')
)