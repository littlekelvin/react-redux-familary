import {INCREMENT, DECREMENT, REST} from '../actions/counter-action'


const initState = {count: 0}
export default function (state = initState, action) {
    switch (action.type) {
        case INCREMENT: {
            return {
                count: state.count + 1
            }
        }

        case DECREMENT: {
            return {
                count: state.count -1
            }
        }

        case REST: {
            return {count: 0}
        }

        default:
            return state
    }
}