import React from 'react'
import {hashHistory, IndexRoute, Route, Router} from 'react-router';

import MainView from '../components/MainView'
import EsrSearchMain from '../components/esr/EsrSearchMain'
import EsrAddMain from '../components/esr/EsrAddMain'
import About from '../components/common/About'

export default () => {
    return (
        <Router history={hashHistory}>
            <Route path="/" component={MainView}>
                <IndexRoute component={EsrSearchMain}/>
                <Route path="/esr">
                    <Route path="/esr/search" component={EsrSearchMain}/>
                    <Route path="/esr/add" component={EsrAddMain}/>
                </Route>
                <Route path='/about' component={About}/>
            </Route>
        </Router>
    )
}