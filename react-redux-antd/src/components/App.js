import {Provider} from "react-redux"
import store from "../store"
import React from 'react'
import buildRouter from '../router'


export default () => {
    return (
        <Provider store={store}>
            {buildRouter()}
        </Provider>
    )
}