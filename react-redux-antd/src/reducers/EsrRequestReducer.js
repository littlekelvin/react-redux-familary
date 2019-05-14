
const initState = {
    payload: []
}

export default function (state = initState, action) {
    switch (action.type) {
        case 'SEARCH_ESR' : {
            return {
                ...state,
                payload: action.payload
            }
        }

        default:
            return state
    }
}