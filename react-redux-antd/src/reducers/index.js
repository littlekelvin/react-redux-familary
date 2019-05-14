import esrReducer from './EsrRequestReducer'
import {combineReducers} from 'redux'

const allReducers = {
    esrRequest: esrReducer
}

const rootReducer = combineReducers(allReducers)

export default rootReducer