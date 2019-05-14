import store from './store'
import {cartAction} from "./actions/cart-action";
import React from 'react'
import ReactDom from 'react-dom'

console.log(store.getState())

// let unsubscribe = store.subscribe(() => {
//     console.log(store.getState())
// })
//
// store.subscribe(() => {
//     console.log(store.getState())
// })
//
// store.dispatch(cartAction.add('coffee', 3, 30))
// store.dispatch(cartAction.add('tea', 5, 20))
// store.dispatch(cartAction.add('juice', 4, 40))
//
// store.dispatch(cartAction.update('coffee', 90, 900))
// store.dispatch(cartAction.delete('tea'))
//
// unsubscribe()

class SubComp extends React.Component {
    render() {
        let cart = this.props.cart.cart
        return (
            <div>
                <ul>
                    {
                        cart.map(pro => (
                            <li key={pro.product}>{pro.product + ', ' + pro.quantity+ ', ' + pro.unitCost}</li>
                        ))
                    }
                </ul>
                <button onClick={() => this.props.dispatch(cartAction.add('coffee', 3, 30))}>click Me</button>
            </div>
        )
    }
}

class App extends React.Component {
    componentWillMount() {
        this.setState(store.getState)
        store.subscribe(() => {
            this.setState(store.getState)
        })
    }

    render() {
        console.log('ggggg', this.state.cart)
        return (
            <SubComp cart={this.state.cart} dispatch={store.dispatch}/>
        )
    }
}

ReactDom.render(
    <App />,
    document.getElementById('app')
)