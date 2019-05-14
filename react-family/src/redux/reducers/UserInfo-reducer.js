import {GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAIL} from '../actions/UserInfo'

const initState = {
    isLoading: false,
    userInfo: {name:'test', intro: 'hello'},
    errorMsg: ''
}

export default function (state=initState, action) {
    switch (action.type) {
        case GET_USER_REQUEST: {
            return {
                ...state,
                isLoading:true,
                userInfo:{},
                errorMsg:''
            }
        }

        case GET_USER_SUCCESS: {
            return {
                ...state,
                isLoading:false,
                userInfo:action.userInfo,
                errorMsg:''
            }
        }

        case GET_USER_FAIL: {
            return {
                ...state,
                isLoading:false,
                userInfo:{},
                errorMsg:'GET USER INFO FAIL'
            }
        }

        default:
            return state
    }
}