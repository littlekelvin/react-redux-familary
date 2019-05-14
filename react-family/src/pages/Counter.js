import React, {Component} from 'react'
import {increment, decrement, reset} from '../redux/actions/counter-action'
import {connect} from 'react-redux'

class Counter extends Component {
    render() {
        return (
            <div>
                <div>Count: {this.props.counter.count}</div>
                <button onClick={() => this.props.increment()}>inc</button>
                <button onClick={() => this.props.decrement()}>dec</button>
                <button onClick={() => this.props.reset()}>reset</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {counter: state.counter}
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => {
            console.log('increment')
            dispatch(increment())
        },
        decrement: () => {
            console.log('decrement')
            dispatch(decrement())
        },
        reset: () => {
            console.log('reset')
            dispatch(reset())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)