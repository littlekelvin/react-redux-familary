
const initState = {
    isLoading: false,
    payload: [],
    errorMsg: ''
}

export default function (state = initState, action) {
    switch (action.type) {
        case 'AJAX_REQUEST': {
            return {
                ...state,
                isLoading: true,
                payload: [],
                errorMsg: ''
            }
        }

        case 'AJAX_REQUEST_SUCCESS': {
            return {
                ...state,
                isLoading: false,
                payload: action.esrRequestList,
                errorMsg: ''
            }
        }

        case 'AJAX_REQUEST_FAIL': {
            return {
                ...state,
                isLoading: false,
                payload: [],
                errorMsg: 'request fail'
            }
        }

        default:
            return state
    }
}