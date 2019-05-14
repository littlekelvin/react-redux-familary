import React from 'react'
import ReactDom from 'react-dom'
import App from "./components/App"
import './asserts/App.css'

if (module.hot) {
    module.hot.accept();
}

ReactDom.render(
    <App />,
    document.getElementById('app')
)

