import {Constant} from '../actions/cart-action'

const initialState = {
    cart: [
        {
            product: 'bread',
            quantity: 2,
            unitCost: 90
        },
        {
            product: 'milk',
            quantity: 1,
            unitCost: 50
        }
    ]
}

export default function (state = initialState, action) {
    switch (action.type) {
        case Constant.ADD: {
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        }

        case Constant.UPDATE: {
            return{
                ...state,
                cart: state.cart.map(item => item.product === action.payload.product ? action.payload : item)
            }
        }

        case Constant.DELETE: {
            return {
                ...state,
                cart: state.cart.filter(item => item.product !== action.payload.product)
            }
        }

        default:
            return state
    }

    return state
}