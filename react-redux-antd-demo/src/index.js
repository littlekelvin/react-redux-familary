import React from 'react'
import ReactDom from 'react-dom'
import App from "./components/App";
import Main from './components/Main'
import './asserts/App.css'

// ReactDom.render(
//     <Main />,
//     document.getElementById('app')
// )

ReactDom.render(
    <App />,
    document.getElementById('app')
)

