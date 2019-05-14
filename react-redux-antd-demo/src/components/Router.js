import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Main from './Main'
import EsrSearch from './EsrSearchMain'
import EsrAdd from './EsrAdd'
import About from './About'
import SubCom from "./SubCom"

export default () => {
    return (
        <Router history={hashHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={EsrSearch}/>
                <Route path="/esr">
                    <Route path="/esr/search" component={EsrSearch}/>
                    <Route path="/esr/add" component={EsrAdd}/>
                </Route>
                <Route path='/about' component={About}/>
            </Route>
        </Router>
    )
}



