import cartReducer from './cart-reducer'
import productReducer from './product-reducer'
import esrReducer from './EsrSearchReducer'
import {combineReducers} from 'redux'

const allReducers = {
    cart: cartReducer,
    esrRequest: esrReducer,
    product: productReducer
}

const rootReducer = combineReducers(allReducers)

export default rootReducer