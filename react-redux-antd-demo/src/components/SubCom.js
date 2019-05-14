import React from 'react'
import {cartAction} from "../actions/cart-action";
import {connect} from 'react-redux'
import Button from 'antd/lib/button'
import '../asserts/App.css'

class SubCom extends React.Component {
    constructor(props) {
        super(props)
    }

    handleAdd = () => {
        let product = document.getElementById('product').value
        let quantity = document.getElementById('quantity').value
        let unitCost = document.getElementById('unitCost').value
        this.props.add(product, quantity, unitCost)
    }

    handleDelete = () => {
        let deleteKey = document.getElementById('delete').value
        this.props.delete(deleteKey)
    }

    render() {
        let cart = this.props.cart.cart
        console.log('cart-> ', cart)
        return (
            <div>
                <ul>
                    {
                        cart.map(pro => (
                            <li key={pro.product}>{pro.product + ', ' + pro.quantity + ', ' + pro.unitCost}</li>
                        ))
                    }
                </ul>
                product: <input type='text' id='product'/>
                quantity: <input type='text' id='quantity'/>
                unitCost: <input type='text' id='unitCost'/> <br/>
                <button onClick={this.handleAdd}>click Me</button><p/>
                delete key: <input type='text' id='delete'/>
                <button onClick={this.handleDelete}>click Me</button>
                <Button type='primary'>antd</Button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispacth) => {
    return {
        add: (product, quantity, unitCost) => {
            dispacth(cartAction.add(product, quantity, unitCost))
        },
        delete: (product) => {
            dispacth(cartAction.delete(product))
        }
    }
}

export default connect((state)=>({cart: state.cart}), mapDispatchToProps)(SubCom)