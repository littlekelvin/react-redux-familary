export const GET_USER_REQUEST = 'GET_USER_REQUEST'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_FAIL = 'GET_USER_FAIL'

function getUserRequest() {
    return {
        type: GET_USER_REQUEST
    }
}

function getUserSuccess(userInfo) {
    return {
        type: GET_USER_SUCCESS,
        userInfo: userInfo
    }
}

function getUserFail() {
    return {
        type: GET_USER_FAIL
    }
}

export function getUserInfo() {
    return (dispatch) => {
        dispatch(getUserRequest());
        return fetch('http://localhost:9090/api/user.json')
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                dispatch(getUserSuccess(json))
            }).catch((err) => {
                dispatch(getUserFail())
            })
    }
}