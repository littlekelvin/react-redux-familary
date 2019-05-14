import store from './store'
import {increment, decrement, reset} from './actions/counter-action'

console.log(store.getState())

let unsubcribe = store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(reset())

unsubcribe()