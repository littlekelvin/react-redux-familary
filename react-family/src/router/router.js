import React from 'react'
import Home from 'pages/Home'
import Page1 from 'pages/Page1'
import Counter from 'pages/Counter'
import UserInfo from 'pages/UserInfo'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

const getRouter = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/page1">Page1</Link></li>
                    <li><Link to="/counter">Counter</Link></li>
                    <li><Link to="/userInfo">UserInfo</Link></li>
                </ul>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/page1" component={Page1}/>
                    <Route path="/counter" component={Counter}/>
                    <Route path="/userInfo" component={UserInfo}/>
                </Switch>
            </div>
        </Router>
    )
}

export default getRouter;


