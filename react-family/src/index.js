import ReactDom from "react-dom"
import React from 'react'
import getRouter from './router/router'
import {Provider} from 'react-redux'
import store from './redux/store'


// --hot 模块热替换， 只更新修改的模块，不需要刷新页面
if (module.hot) {
    module.hot.accept()
}


ReactDom.render(
    <Provider store={store}>
        {getRouter()}
    </Provider>,
    document.getElementById('app')
)